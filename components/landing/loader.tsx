'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2500; // 2.5 seconds loading
    const intervalTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 800); // Brief pause at 100% before firing complete
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate logs based on count
  const allLogs = [
    {
      threshold: 0,
      time: '09:12:44',
      level: 'INF',
      levelColor: 'text-[#9cf0ff]',
      message: 'Connecting to node_registry...',
      status: '[OK]',
      statusColor: 'text-[#b8f600]',
      opacity: 'opacity-50',
    },
    {
      threshold: 20,
      time: '09:12:44',
      level: 'INF',
      levelColor: 'text-[#9cf0ff]',
      message: "Fetching dependencies from 'volt-core'...",
      status: '',
      statusColor: '',
      opacity: 'opacity-60',
    },
    {
      threshold: 40,
      time: '09:12:45',
      level: 'INF',
      levelColor: 'text-[#9cf0ff]',
      message: 'Configuring environment: dev_cloud_kinetic',
      status: '',
      statusColor: '',
      opacity: 'opacity-70',
    },
    {
      threshold: 60,
      time: '09:12:45',
      level: 'INF',
      levelColor: 'text-[#9cf0ff]',
      message: 'Injecting Kinetic Design System tokens...',
      status: '',
      statusColor: '',
      opacity: 'opacity-80',
    },
    {
      threshold: 80,
      time: '09:12:46',
      level: 'INF',
      levelColor: 'text-[#9cf0ff]',
      message: 'Optimizing shader cache for neon-glow...',
      status: '',
      statusColor: '',
      opacity: 'opacity-100',
    },
    {
      threshold: 100,
      time: '09:12:46',
      level: 'SCN',
      levelColor: 'text-[#b8f600]',
      message: 'SUCCESS: Project ready in 142ms',
      status: '',
      statusColor: '',
      messageColor:
        'text-[#b8f600] drop-shadow-[0px_0px_12px_rgba(184,246,0,0.6)]',
      opacity: 'opacity-100',
    },
  ];

  const visibleLogs = allLogs.filter((log) => count >= log.threshold);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex size-full flex-col content-stretch items-start bg-[#131313] font-mono"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(184, 246, 0, 0.05) 1px, transparent 1px), linear-gradient(rgba(184, 246, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 flex flex-col content-stretch items-start p-[24px] opacity-20">
        <div className="size-[48px] shrink-0 border-t border-l border-solid border-[#b8f600]" />
      </div>
      <div className="absolute right-0 bottom-0 flex flex-col content-stretch items-start p-[24px] opacity-20">
        <div className="size-[48px] shrink-0 border-r border-b border-solid border-[#b8f600]" />
      </div>
      <div className="via-1/2 pointer-events-none absolute inset-0 bg-gradient-to-t from-[#131313] via-[rgba(19,19,19,0)] to-[#131313]" />

      <div className="relative flex min-h-screen w-full shrink-0 flex-col content-stretch items-center justify-center overflow-clip p-[24px] md:p-[48px]">
        <div className="relative flex shrink-0 flex-col content-stretch items-center pb-[40px] md:pb-[64px]">
          <div className="relative flex shrink-0 flex-col content-stretch items-center">
            <div className="relative flex shrink-0 flex-col content-stretch items-center">
              <div className="relative flex h-[64px] shrink-0 flex-col justify-center font-sans text-[48px] leading-[0] font-bold tracking-[-4.8px] text-white uppercase drop-shadow-[0px_0px_12px_rgba(184,246,0,0.6)] md:h-[96px] md:text-[96px]">
                <p className="leading-[96px]">Voltfast</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-col content-stretch items-center pt-[8px] md:pt-[16px]">
              <div className="relative flex h-[16px] shrink-0 flex-col justify-center text-[10px] leading-[0] tracking-[2px] text-[#b8f600] uppercase not-italic opacity-80 md:text-[12px] md:tracking-[3.6px]">
                <p className="text-center leading-[16px]">
                  Hyper-Velocity Initialization
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full max-w-[672px] shrink-0 flex-col content-stretch items-start gap-[16px]">
          <div className="relative flex w-full shrink-0 content-stretch items-end justify-between">
            <div className="relative flex shrink-0 flex-col content-stretch items-start">
              <div className="relative flex h-[15px] shrink-0 flex-col justify-center text-[10px] leading-[0] tracking-[1px] text-[#c3caac] uppercase not-italic">
                <p className="leading-[15px]">System Integrity: Optimal</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-col content-stretch items-start">
              <div className="relative flex h-[15px] shrink-0 flex-col justify-center text-[10px] leading-[0] tracking-[1px] text-[#b8f600] uppercase not-italic">
                <p className="leading-[15px]">{count}% Linked</p>
              </div>
            </div>
          </div>
          <div className="relative h-[6px] w-full shrink-0 overflow-clip rounded-full bg-[#353534]">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#b8f600] shadow-[0px_0px_20px_0px_rgba(184,246,0,0.4)]"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        <div className="relative z-10 flex w-full max-w-[768px] shrink-0 flex-col content-stretch items-center pt-[32px] md:pt-[48px]">
          <div className="relative flex w-full shrink-0 flex-col content-stretch items-start overflow-clip rounded-md border border-solid border-[rgba(67,73,51,0.2)] bg-[#0e0e0e] p-px shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="relative w-full shrink-0 border-b border-solid border-[rgba(67,73,51,0.1)] bg-[#1c1b1b]">
              <div className="relative flex w-full content-stretch items-center justify-between border-0 border-solid border-[transparent] bg-clip-padding px-[16px] pt-[8px] pb-[9px]">
                <div className="relative shrink-0">
                  <div className="relative flex content-stretch items-start gap-2 border-0 border-solid border-[transparent] bg-clip-padding">
                    <div className="size-[8px] shrink-0 rounded-[12px] bg-red-400/60" />
                    <div className="size-[8px] shrink-0 rounded-[12px] bg-yellow-400/60" />
                    <div className="size-[8px] shrink-0 rounded-[12px] bg-green-400/20" />
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="relative flex flex-col content-stretch items-start border-0 border-solid border-[transparent] bg-clip-padding">
                    <div className="relative flex h-[15px] shrink-0 flex-col justify-center text-[10px] leading-[0] tracking-[1px] text-[rgba(255,255,255,0.3)] uppercase not-italic">
                      <p className="leading-[15px]">
                        voltfast_cli // thread_042
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden md:h-[240px]">
              <div className="relative flex w-full flex-col content-stretch items-start gap-[8px] border-0 border-solid border-[transparent] bg-clip-padding p-[16px] md:p-[24px]">
                {visibleLogs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex content-stretch items-start ${log.opacity} relative w-full shrink-0 text-[11px] md:text-[14px]`}
                  >
                    <div className="relative flex w-[60px] shrink-0 flex-col justify-center leading-[22px] text-[#c3caac] not-italic md:w-[70px]">
                      <p>{log.time}</p>
                    </div>
                    <div className="relative flex shrink-0 flex-col content-stretch items-start pl-[8px] md:pl-[12px]">
                      <div
                        className={`relative flex shrink-0 flex-col justify-center leading-[22px] not-italic ${log.levelColor} w-[25px]`}
                      >
                        <p>{log.level}</p>
                      </div>
                    </div>
                    <div className="relative flex flex-1 shrink-0 flex-col content-stretch items-start pl-[8px] md:pl-[12px]">
                      <div
                        className={`relative flex shrink-0 flex-col justify-center leading-[22px] not-italic ${log.messageColor || 'text-[rgba(255,255,255,0.7)]'}`}
                      >
                        <p>
                          {log.message}
                          {log.status && (
                            <span
                              className={`ml-2 not-italic ${log.statusColor}`}
                            >
                              {log.status}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className="relative mt-2 flex w-full shrink-0 content-stretch items-center border-l-2 border-solid border-[#b8f600] pl-[14px]">
                  <div className="relative shrink-0">
                    <div className="relative flex flex-col content-stretch items-start border-0 border-solid border-[transparent] bg-clip-padding">
                      <div className="relative flex shrink-0 flex-col justify-center text-[14px] leading-[22px] text-[#b8f600] not-italic">
                        <p>❯</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0">
                    <div className="relative flex flex-col content-stretch items-start border-0 border-solid border-[transparent] bg-clip-padding pl-[12px]">
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="relative flex shrink-0 flex-col justify-center text-[14px] leading-[22px] text-white not-italic"
                      >
                        <p>_</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute relative bottom-8 z-10 mt-16 flex shrink-0 content-stretch items-center gap-[32px] opacity-40 md:bottom-12">
          <div className="relative flex shrink-0 content-stretch items-center">
            <div className="relative flex shrink-0 flex-col content-stretch items-start">
              <div className="relative flex h-[15px] shrink-0 flex-col justify-center text-[10px] leading-[0] tracking-[-0.5px] text-[#c3caac] uppercase not-italic">
                <p className="leading-[15px]">Build:</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-col content-stretch items-start pl-[8px]">
              <div className="relative flex h-[15px] shrink-0 flex-col justify-center text-[10px] leading-[0] tracking-[1px] text-white uppercase not-italic">
                <p className="leading-[15px]">v.1.0.42-beta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
