import { getLatestVersion } from 'lib/utils';
import Link from 'next/link';

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const version = await getLatestVersion();

  return (
    <footer className="relative mx-auto flex w-full max-w-[1440px] flex-col">
      <div className="border-border/40 grid w-full grid-cols-1 gap-12 border-x border-dashed px-8 py-[96px] md:grid-cols-4 md:px-[48px] dark:border-white/5">
        {/* Col 1 */}
        <div className="flex flex-col gap-[15px]">
          <h3 className="font-space-grotesk text-foreground text-[18px] font-bold tracking-[-0.9px] uppercase dark:text-white">
            Volt_Fast
          </h3>
          <div className="text-muted-foreground font-mono text-[10px] leading-[16.25px] tracking-[1px] uppercase dark:text-[#525252]">
            <p>High-Velocity Toolkit</p>
            <p>For Builders.</p>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-[24px]">
          <h4 className="font-inter text-foreground text-[10px] font-semibold tracking-[2px] uppercase dark:text-white">
            Network
          </h4>
          <ul className="text-muted-foreground flex flex-col gap-[12px] font-mono text-[10px] tracking-[1px] uppercase dark:text-[#525252]">
            {/* <li className="py-[2px]">
              <Link href="#" className="transition-colors hover:text-white">
                Twitter
              </Link>
            </li> */}
            <li className="py-[2px]">
              <Link
                className="hover:text-foreground transition-colors dark:hover:text-white"
                href="https://github.com/frizzyondabeat/volt-fast"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            {/* <li className="py-[2px]">
              <Link href="#" className="transition-colors hover:text-white">
                Discord
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-[24px]">
          <h4 className="font-inter text-foreground text-[10px] font-semibold tracking-[2px] uppercase dark:text-white">
            Platform
          </h4>
          <ul className="text-muted-foreground flex flex-col gap-[12px] font-mono text-[10px] tracking-[1px] uppercase dark:text-[#525252]">
            {/* <li className="py-[2px]">
              <Link href="#" className="transition-colors hover:text-white">
                Status
              </Link>
            </li> */}
            <li className="py-[2px]">
              <Link
                href="https://www.npmjs.com/package/@frizzyondabeat/volt-fast?activeTab=versions"
                className="hover:text-foreground transition-colors dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Releases
              </Link>
            </li>
            {/* <li className="py-[2px]">
              <Link href="#" className="transition-colors hover:text-white">
                Security
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col items-start gap-[8px] md:items-end md:justify-end">
          <div className="text-muted-foreground font-mono text-[10px] tracking-[1px] uppercase md:text-right dark:text-[#525252]">
            © {currentYear} VoltFast.
          </div>
          <div className="text-muted-foreground/60 font-mono text-[10px] md:text-right dark:text-[#262626]">
            v{version}-LATEST
          </div>
        </div>
      </div>
    </footer>
  );
}
