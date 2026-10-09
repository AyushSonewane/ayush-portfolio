import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Zap, CheckCircle2, Wifi } from 'lucide-react';

export const PacketTransferDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-[#0e0e15] border border-white/10 p-5 sm:p-6 overflow-hidden relative">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3DDC84]/5 via-[#22D3EE]/5 to-[#00ADEF]/5 pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Wifi size={14} className="text-[#22D3EE] animate-pulse" />
          <span className="text-slate-200 font-semibold">Direct LAN Protocol</span>
          <span className="text-slate-500">• Zero Cloud</span>
        </div>
        <div className="px-2.5 py-0.5 rounded-full bg-[#C6FF3D]/10 text-[#C6FF3D] border border-[#C6FF3D]/30 font-mono text-[11px] flex items-center gap-1.5 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-ping" />
          78.4 MB/s ⚡
        </div>
      </div>

      {/* Interactive Transfer Bridge */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Android Sender Node */}
        <div className="w-full md:w-5/12 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-medium text-xs font-mono">
              <Smartphone size={16} className="text-[#3DDC84]" />
              <span>Android Phone</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3DDC84]/15 text-[#3DDC84] border border-[#3DDC84]/30 font-semibold">
              SENDING
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs flex items-center gap-3">
            <span className="text-lg">📦</span>
            <div className="overflow-hidden">
              <div className="text-slate-200 font-medium truncate">vacation_4k_video.mp4</div>
              <div className="text-[10px] text-slate-500">1.8 GB &bull; Socket Stream</div>
            </div>
          </div>

          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#3DDC84]"
              animate={{ width: ['20%', '85%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Central Laser Conduit Stream */}
        <div className="w-full md:w-2/12 flex flex-col items-center justify-center my-2 md:my-0 relative">
          <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden hidden md:block">
            {/* Animated Laser Pulses */}
            <motion.div
              className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent shadow-[0_0_12px_#22D3EE]"
              animate={{ left: ['-20%', '120%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="py-1 px-3 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[10px] font-mono text-[#22D3EE] flex items-center gap-1">
            <Zap size={10} />
            <span>LAN MESH</span>
          </div>
        </div>

        {/* Windows Receiver Node */}
        <div className="w-full md:w-5/12 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-medium text-xs font-mono">
              <Laptop size={16} className="text-[#00ADEF]" />
              <span>Windows PC</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00ADEF]/15 text-[#00ADEF] border border-[#00ADEF]/30 font-semibold">
              RECEIVING
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs flex items-center justify-between">
            <div className="flex items-center gap-2 truncate">
              <CheckCircle2 size={14} className="text-[#C6FF3D]" />
              <span className="text-slate-300 truncate">photo_album.zip</span>
            </div>
            <span className="text-[10px] text-[#C6FF3D] font-mono font-bold">100% DONE</span>
          </div>

          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#00ADEF]"
              animate={{ width: ['15%', '84%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
