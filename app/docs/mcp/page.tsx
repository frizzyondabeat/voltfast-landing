import { ScrollReveal } from 'components/landing/scroll-reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Server — AI Agent Integration | Voltfast',
  description:
    'Use the Voltfast MCP server to scaffold frontend projects with any AI agent. Works with Claude Code, Trae, Cursor, Windsurf, VS Code Copilot, and any MCP-compatible client.',
  alternates: { canonical: '/docs/mcp' },
  openGraph: {
    title: 'MCP Server — AI Agent Integration | Voltfast',
    description:
      'Scaffold frontend projects from AI agents with zero interaction using the Voltfast MCP server.',
    url: '/docs/mcp',
  },
  twitter: {
    title: 'MCP Server — AI Agent Integration | Voltfast',
    description:
      'Scaffold frontend projects from AI agents with zero interaction using the Voltfast MCP server.',
  },
};

const TOOLS = [
  {
    id: 'detect-project',
    name: 'detect_project',
    badge: 'Detection',
    description:
      'Inspects a directory and returns its framework, package manager, and installed toolchain. Call this first — its output feeds directly into plan_setup and plan_test_setup.',
    input: `{
  projectDir: string  // absolute path to project
}`,
    output: `{
  packageManager: "npm" | "yarn" | "pnpm" | "bun",
  detectedTools: string[],   // e.g. ["nextjs", "typescript"]
  hasTypeScript: boolean,
  hasNextjs:     boolean,
  hasVite:       boolean,
  hasTailwind:   boolean
}`,
  },
  {
    id: 'plan-setup',
    name: 'plan_setup',
    badge: 'Configuration',
    description:
      'Generates every config file and the exact install command for any combination of ESLint, Prettier, Tailwind CSS, Husky, Commitlint, and Shadcn. Returns content — never writes to disk.',
    input: `{
  tools:          ("tailwind"|"eslint"|"prettier"|
                   "husky"|"commitlint"|"shadcn")[],
  projectDir?:    string,   // auto-detects framework + PM
  detectedTools?: string[], // override detection
  packageManager?: "npm"|"yarn"|"pnpm"|"bun",
  settings?: {
    filenameConvention?: "KEBAB_CASE"|"PASCAL_CASE"|...,
    tailwindCssPath?:    string,
    huskySettings?:      { ... }
  }
}`,
    output: `{
  packageManager:  string,
  detectedTools:   string[],
  packages:        string[],
  installCommand:  string,   // e.g. "pnpm add -D eslint ..."
  configs: [
    { path: string, content: string }
  ],
  notes: string[]  // manual steps (shadcn, husky init)
}`,
  },
  {
    id: 'plan-test-setup',
    name: 'plan_test_setup',
    badge: 'Testing',
    description:
      'Generates a test runner scaffold for Vitest, Jest, or Cypress — including config files, package.json scripts, and the install command. Framework is auto-detected when projectDir is provided.',
    input: `{
  projectDir?: string,                 // auto-detects framework
  framework?:  "nextjs"|"vite"|"generic",
  runner:      "vitest"|"jest"|"cypress",
  hasTs?:      boolean  // default: true
}`,
    output: `{
  framework:      string,
  runner:         string,
  packageManager: string,
  packages:       string[],
  installCommand: string,
  scripts: {
    "test":          string,
    "test:coverage": string,
    ...
  },
  configs: [
    { path: string, content: string }
  ],
  notes: string[]
}`,
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Detect the project',
    description: 'The agent inspects the project directory to determine the framework and package manager.',
    lines: [
      { type: 'comment', text: '// agent calls detect_project' },
      { type: 'muted', text: 'tool: detect_project' },
      { type: 'normal', text: 'projectDir: "/my-nextjs-app"' },
      { type: 'spacer' },
      { type: 'comment', text: '// server responds' },
      { type: 'accent', text: '✔ packageManager: "pnpm"' },
      { type: 'accent', text: '✔ detectedTools: ["nextjs", "typescript"]' },
    ],
  },
  {
    number: '02',
    title: 'Generate the setup plan',
    description: 'The agent requests config files and install commands for the desired tooling.',
    lines: [
      { type: 'comment', text: '// agent calls plan_setup' },
      { type: 'muted', text: 'tool: plan_setup' },
      { type: 'normal', text: 'tools: ["eslint", "prettier", "husky"]' },
      { type: 'normal', text: 'detectedTools: ["nextjs", "typescript"]' },
      { type: 'normal', text: 'packageManager: "pnpm"' },
      { type: 'spacer' },
      { type: 'accent', text: '✔ installCommand: "pnpm add -D eslint ..."' },
      { type: 'accent', text: '✔ configs: [eslint.config.mjs, ...]' },
    ],
  },
  {
    number: '03',
    title: 'Apply the plan',
    description: 'The agent writes the config files and runs the install command returned by the server.',
    lines: [
      { type: 'comment', text: '// agent writes files' },
      { type: 'accent', text: '✔ write  eslint.config.mjs' },
      { type: 'accent', text: '✔ write  prettier.config.mjs' },
      { type: 'accent', text: '✔ write  .husky/pre-commit' },
      { type: 'spacer' },
      { type: 'comment', text: '// agent runs install' },
      { type: 'accent', text: '✔ pnpm add -D eslint prettier husky' },
    ],
  },
  {
    number: '04',
    title: 'Scaffold tests',
    description: 'Optionally, the agent scaffolds a test runner with a single call.',
    lines: [
      { type: 'comment', text: '// agent calls plan_test_setup' },
      { type: 'muted', text: 'tool: plan_test_setup' },
      { type: 'normal', text: 'runner: "vitest"' },
      { type: 'normal', text: 'projectDir: "/my-nextjs-app"' },
      { type: 'spacer' },
      { type: 'accent', text: '✔ write  vitest.config.ts' },
      { type: 'accent', text: '✔ write  __tests__/example.test.tsx' },
      { type: 'accent', text: '✔ scripts → package.json' },
    ],
  },
];

function TerminalLine({ line }: { line: (typeof STEPS)[0]['lines'][0] }) {
  if (line.type === 'spacer') return <div className="h-[8px]" />;
  const colorMap: Record<string, string> = {
    comment: 'text-[#4b5563]',
    muted: 'text-[#6b7280]',
    normal: 'text-[#e5e2e1]',
    accent: 'text-[#b8f600]',
  };
  return (
    <span className={`font-mono text-[13px] leading-[20px] ${colorMap[line.type] ?? 'text-[#e5e2e1]'}`}>
      {line.text}
    </span>
  );
}

export default function McpPage() {
  return (
    <div className="flex w-full flex-col items-start gap-[48px] md:gap-[96px]">

      {/* ── Overview ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="overview"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[12px]">
              <span className="rounded-[2px] bg-[rgba(184,246,0,0.1)] px-[8px] py-[4px] font-mono text-[10px] font-bold tracking-[1.5px] text-[#b8f600] uppercase">
                MCP
              </span>
              <span className="font-mono text-[12px] text-[#4b5563]">
                Model Context Protocol
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-[34px] leading-[1.1] font-bold tracking-[-1.5px] text-white sm:text-[42px] md:text-[48px] md:tracking-[-3px] lg:text-[60px] lg:leading-[60px]">
              AI Agent{' '}
              <span className="text-[#b8f600]">Integration</span>
            </h1>

            <p className="max-w-[640px] text-[18px] leading-[1.6] text-[#c3caac] md:text-[20px]">
              Voltfast ships a built-in MCP server so AI agents can scaffold
              frontend projects without human interaction — generating config
              files and install commands on demand.
            </p>
          </div>

          {/* Advisory callout */}
          <div className="flex w-full flex-col gap-[12px] rounded-[4px] border-l-[2px] border-[#b8f600] bg-[#0e0e0e] p-[24px]">
            <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-[#b8f600] uppercase">
              Advisory mode
            </span>
            <p className="text-[14px] leading-[22px] text-[#c3caac]">
              The MCP server <strong className="text-[#e5e2e1]">never writes to disk</strong>.
              Every tool returns file contents and install commands for the agent
              to apply — keeping the agent in full control of the filesystem.
            </p>
          </div>

          {/* Three tool pills */}
          <div className="flex flex-wrap gap-[12px]">
            {TOOLS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="flex items-center gap-[8px] rounded-[6px] border border-white/5 bg-[#1c1b1b] px-[16px] py-[10px] transition-colors hover:border-[rgba(184,246,0,0.2)] hover:bg-[rgba(184,246,0,0.04)] cursor-pointer"
              >
                <span className="size-[6px] rounded-full bg-[#b8f600]" />
                <span className="font-mono text-[13px] text-[#e5e2e1]">
                  {t.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Installation ───────────────────────────────────────── */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="installation"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Installation
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

          <div className="flex w-full flex-col gap-[48px]">

            {/* Claude Code */}
            <div className="flex w-full flex-col gap-[20px]">
              <div className="flex items-center gap-[12px]">
                <h3 className="font-['Space_Grotesk'] text-[18px] font-bold text-[#e5e2e1]">
                  Claude Code
                </h3>
                <span className="rounded-[2px] bg-[rgba(184,246,0,0.1)] px-[6px] py-[2px] font-mono text-[10px] text-[#b8f600]">
                  RECOMMENDED
                </span>
              </div>
              <p className="text-[14px] leading-[22px] text-[#c3caac]">
                Run this command once to register the server globally — available in every project session.
              </p>
              <div className="w-full overflow-hidden rounded-[8px] border border-white/5 bg-[#0e0e0e]">
                <div className="flex items-center gap-[8px] border-b border-white/5 px-[24px] py-[14px]">
                  <div className="size-[10px] rounded-full bg-red-500/20" />
                  <div className="size-[10px] rounded-full bg-yellow-500/20" />
                  <div className="size-[10px] rounded-full bg-green-500/20" />
                  <span className="ml-[8px] font-mono text-[11px] text-[#4b5563]">terminal</span>
                </div>
                <div className="overflow-x-auto p-[24px]">
                  <span className="inline-flex whitespace-nowrap">
                    <span className="font-mono text-[13px] text-[#b8f600]">$ </span>
                    <span className="font-mono text-[13px] text-[#e5e2e1]">
                      claude mcp add --scope user volt-fast npx{' '}
                    </span>
                    <span className="font-mono text-[13px] text-[#c3caac]">
                      -- -y --package=@frizzyondabeat/volt-fast volt-fast-mcp
                    </span>
                  </span>
                </div>
                <div className="h-[3px] w-full bg-gradient-to-r from-[#b8f600] to-transparent" />
              </div>
            </div>

            {/* JSON-config clients: Claude Desktop · Trae · Cursor · Windsurf */}
            <div className="flex w-full flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-['Space_Grotesk'] text-[18px] font-bold text-[#e5e2e1]">
                  Claude Desktop · Trae · Cursor · Windsurf
                </h3>
                <p className="text-[14px] leading-[22px] text-[#c3caac]">
                  All these clients share the same{' '}
                  <code className="rounded-[3px] bg-[#1c1b1b] px-[6px] py-[2px] font-mono text-[12px] text-[#b8f600]">
                    mcpServers
                  </code>{' '}
                  JSON format. Add the block below to your client&apos;s config file, then restart the IDE.
                </p>
              </div>

              {/* Shared JSON block */}
              <div className="w-full overflow-hidden rounded-[8px] border border-white/5 bg-[#0e0e0e]">
                <div className="flex items-center gap-[8px] border-b border-white/5 px-[24px] py-[14px]">
                  <div className="size-[10px] rounded-full bg-red-500/20" />
                  <div className="size-[10px] rounded-full bg-yellow-500/20" />
                  <div className="size-[10px] rounded-full bg-green-500/20" />
                  <span className="ml-[8px] font-mono text-[11px] text-[#4b5563]">mcp config</span>
                </div>
                <pre className="overflow-x-auto p-[24px] font-mono text-[13px] leading-[22px]">
                  <span className="text-[#4b5563]">{'{\n'}</span>
                  <span className="text-[#6b7280]">{'  "mcpServers": {\n'}</span>
                  <span className="text-[#6b7280]">{'    "volt-fast": {\n'}</span>
                  <span className="text-[#6b7280]">{'      "command": '}</span>
                  <span className="text-[#b8f600]">{'"npx"'}</span>
                  <span className="text-[#6b7280]">{',\n'}</span>
                  <span className="text-[#6b7280]">{'      "args": ['}</span>
                  <span className="text-[#b8f600]">{'"−y"'}</span>
                  <span className="text-[#6b7280]">{', '}</span>
                  <span className="text-[#b8f600]">{"\"--package=@frizzyondabeat/volt-fast\""}</span>
                  <span className="text-[#6b7280]">{', '}</span>
                  <span className="text-[#b8f600]">{'"volt-fast-mcp"'}</span>
                  <span className="text-[#6b7280]">{']\n'}</span>
                  <span className="text-[#6b7280]">{'    }\n'}</span>
                  <span className="text-[#6b7280]">{'  }\n'}</span>
                  <span className="text-[#4b5563]">{'}'}</span>
                </pre>
                <div className="h-[3px] w-full bg-gradient-to-r from-[#b8f600] to-transparent" />
              </div>

              {/* Per-client config paths */}
              <div className="flex w-full flex-col gap-[0px] overflow-hidden rounded-[8px] border border-white/5">
                {[
                  {
                    client: 'Claude Desktop',
                    mac: '~/Library/Application Support/Claude/claude_desktop_config.json',
                    win: '%APPDATA%\\Claude\\claude_desktop_config.json',
                  },
                  {
                    client: 'Trae',
                    note: 'Settings → Extensions → MCP Servers → Add Server, or edit:',
                    mac: '~/Library/Application Support/Trae/mcp_settings.json',
                    win: '%APPDATA%\\Trae\\mcp_settings.json',
                  },
                  {
                    client: 'Cursor',
                    note: 'Global config (applies to every project):',
                    mac: '~/.cursor/mcp.json',
                    win: '%USERPROFILE%\\.cursor\\mcp.json',
                    extra: 'Project-scoped: .cursor/mcp.json at project root',
                  },
                  {
                    client: 'Windsurf',
                    mac: '~/.codeium/windsurf/mcp_config.json',
                    win: '%USERPROFILE%\\.codeium\\windsurf\\mcp_config.json',
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.client}
                    className={`flex flex-col gap-[6px] bg-[#1c1b1b] px-[20px] py-[16px] ${i < arr.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <span className="font-mono text-[11px] font-bold text-[#e5e2e1]">
                      {row.client}
                    </span>
                    {row.note && (
                      <span className="text-[11px] text-[#6b7280]">{row.note}</span>
                    )}
                    <span className="break-all font-mono text-[10px] text-[#6b7280]">
                      <span className="text-[#4b5563]">macOS </span>
                      {row.mac}
                    </span>
                    <span className="break-all font-mono text-[10px] text-[#6b7280]">
                      <span className="text-[#4b5563]">Windows </span>
                      {row.win}
                    </span>
                    {row.extra && (
                      <span className="break-all font-mono text-[10px] text-[#4b5563]">{row.extra}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* VS Code (GitHub Copilot) */}
            <div className="flex w-full flex-col gap-[20px]">
              <div className="flex items-center gap-[12px]">
                <h3 className="font-['Space_Grotesk'] text-[18px] font-bold text-[#e5e2e1]">
                  VS Code
                </h3>
                <span className="rounded-[2px] border border-white/10 bg-[#131313] px-[6px] py-[2px] font-mono text-[10px] tracking-[1px] text-[#6b7280] uppercase">
                  GitHub Copilot
                </span>
              </div>
              <p className="text-[14px] leading-[22px] text-[#c3caac]">
                Create{' '}
                <code className="rounded-[3px] bg-[#1c1b1b] px-[6px] py-[2px] font-mono text-[12px] text-[#b8f600]">
                  .vscode/mcp.json
                </code>{' '}
                at the project root. VS Code uses a{' '}
                <code className="rounded-[3px] bg-[#1c1b1b] px-[6px] py-[2px] font-mono text-[12px] text-[#c3caac]">
                  servers
                </code>{' '}
                key (not{' '}
                <code className="rounded-[3px] bg-[#1c1b1b] px-[6px] py-[2px] font-mono text-[12px] text-[#c3caac]">
                  mcpServers
                </code>
                ) and requires an explicit{' '}
                <code className="rounded-[3px] bg-[#1c1b1b] px-[6px] py-[2px] font-mono text-[12px] text-[#c3caac]">
                  type
                </code>{' '}
                field.
              </p>
              <div className="w-full overflow-hidden rounded-[8px] border border-white/5 bg-[#0e0e0e]">
                <div className="flex items-center gap-[8px] border-b border-white/5 px-[24px] py-[14px]">
                  <div className="size-[10px] rounded-full bg-red-500/20" />
                  <div className="size-[10px] rounded-full bg-yellow-500/20" />
                  <div className="size-[10px] rounded-full bg-green-500/20" />
                  <span className="ml-[8px] font-mono text-[11px] text-[#4b5563]">.vscode/mcp.json</span>
                </div>
                <pre className="overflow-x-auto p-[24px] font-mono text-[13px] leading-[22px]">
                  <span className="text-[#4b5563]">{'{\n'}</span>
                  <span className="text-[#6b7280]">{'  "servers": {\n'}</span>
                  <span className="text-[#6b7280]">{'    "volt-fast": {\n'}</span>
                  <span className="text-[#6b7280]">{'      "type": '}</span>
                  <span className="text-[#b8f600]">{'"stdio"'}</span>
                  <span className="text-[#6b7280]">{',\n'}</span>
                  <span className="text-[#6b7280]">{'      "command": '}</span>
                  <span className="text-[#b8f600]">{'"npx"'}</span>
                  <span className="text-[#6b7280]">{',\n'}</span>
                  <span className="text-[#6b7280]">{'      "args": ['}</span>
                  <span className="text-[#b8f600]">{'"−y"'}</span>
                  <span className="text-[#6b7280]">{', '}</span>
                  <span className="text-[#b8f600]">{"\"--package=@frizzyondabeat/volt-fast\""}</span>
                  <span className="text-[#6b7280]">{', '}</span>
                  <span className="text-[#b8f600]">{'"volt-fast-mcp"'}</span>
                  <span className="text-[#6b7280]">{']\n'}</span>
                  <span className="text-[#6b7280]">{'    }\n'}</span>
                  <span className="text-[#6b7280]">{'  }\n'}</span>
                  <span className="text-[#4b5563]">{'}'}</span>
                </pre>
                <div className="h-[3px] w-full bg-gradient-to-r from-[#b8f600] to-transparent" />
              </div>
              <p className="text-[12px] leading-[18px] text-[#4b5563]">
                Requires VS Code ≥ 1.99 with the GitHub Copilot extension and MCP support enabled in settings.
              </p>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ── Tools Reference ────────────────────────────────────── */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="tools"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Tools Reference
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

          <p className="max-w-[560px] text-[16px] leading-[26px] text-[#c3caac]">
            Three tools cover the full setup lifecycle — detect, plan, apply.
            All inputs are validated with Zod schemas.
          </p>

          <div className="flex w-full flex-col gap-[32px]">
            {TOOLS.map((tool) => (
              <div
                key={tool.id}
                id={tool.id}
                className="flex w-full flex-col gap-[24px] rounded-[16px] border border-white/5 bg-[#1c1b1b] p-[20px] md:p-[32px]"
              >
                {/* Tool header */}
                <div className="flex flex-wrap items-center gap-[12px]">
                  <code className="font-mono text-[18px] font-bold text-[#b8f600]">
                    {tool.name}
                  </code>
                  <span className="rounded-[2px] border border-white/10 bg-[#131313] px-[8px] py-[3px] font-mono text-[10px] tracking-[1px] text-[#6b7280] uppercase">
                    {tool.badge}
                  </span>
                </div>

                <p className="text-[14px] leading-[22px] text-[#c3caac]">
                  {tool.description}
                </p>

                {/* Input / Output */}
                <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2">
                  <div className="flex flex-col gap-[10px]">
                    <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-[#4b5563] uppercase">
                      Input
                    </span>
                    <pre className="w-full overflow-x-auto rounded-[8px] border border-white/5 bg-[#0e0e0e] p-[16px] font-mono text-[12px] leading-[20px] text-[#c3caac]">
                      {tool.input}
                    </pre>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-[#4b5563] uppercase">
                      Output
                    </span>
                    <pre className="w-full overflow-x-auto rounded-[8px] border border-white/5 bg-[#0e0e0e] p-[16px] font-mono text-[12px] leading-[20px] text-[#c3caac]">
                      {tool.output}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Usage Example ──────────────────────────────────────── */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="workflow"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Agent Workflow
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

          <p className="max-w-[560px] text-[16px] leading-[26px] text-[#c3caac]">
            A typical agent run — scaffolding a Next.js project with ESLint,
            Prettier, Husky, and Vitest in four tool calls.
          </p>

          <div className="grid w-full grid-cols-1 gap-[16px] md:grid-cols-2">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex w-full flex-col gap-[0px] overflow-hidden rounded-[12px] border border-white/5 bg-[#1c1b1b]"
              >
                {/* Step header */}
                <div className="flex items-center gap-[12px] border-b border-white/5 px-[24px] py-[18px]">
                  <span className="font-mono text-[11px] font-bold text-[#b8f600]">
                    {step.number}
                  </span>
                  <span className="font-['Space_Grotesk'] text-[15px] font-bold text-[#e5e2e1]">
                    {step.title}
                  </span>
                </div>

                {/* Terminal body */}
                <div className="flex flex-col gap-[2px] bg-[#0e0e0e] p-[20px]">
                  {step.lines.map((line, i) => (
                    <TerminalLine key={i} line={line} />
                  ))}
                </div>

                {/* Description footer */}
                <div className="border-t border-white/5 px-[24px] py-[16px]">
                  <p className="text-[12px] leading-[18px] text-[#6b7280]">
                    {step.description}
                  </p>
                </div>

                <div className="h-[3px] w-full bg-gradient-to-r from-[#b8f600] to-transparent" />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
