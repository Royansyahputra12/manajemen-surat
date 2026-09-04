import { useState } from 'react'

const roles = ['Admin', 'Pimpinan', 'Sekretaris', 'Staf']

const baseMatrix = [
  { scope: 'Dashboard & Metrics Access', vals: [true, true, true, false] },
  { scope: 'Surat Masuk (Receive & Log)', vals: [true, true, true, true] },
  { scope: 'Disposisi & Executive Routing', vals: [true, true, true, false] },
  { scope: 'Surat Keluar Authorization', vals: [true, true, true, false] },
  { scope: 'DMS & Cryptographic Archival', vals: [true, true, true, false] },
  { scope: 'System Configuration & Security', vals: [true, false, false, false] },
]

const channels = [
  {
    key: 'smtp',
    icon: 'mail',
    iconBg: 'bg-primary/10',
    iconCls: 'text-primary',
    title: 'SMTP / Email Relay',
    sub: 'tls-secure.eoffice.gov',
    desc:
      'Sends automated digests, approval requests, and password reset tokens via enterprise mail gateway.',
    status: 'Connected',
    action: 'Configure SMTP',
  },
  {
    key: 'fcm',
    icon: 'notifications_active',
    iconBg: 'bg-secondary/10',
    iconCls: 'text-secondary',
    title: 'FCM / Web Push',
    sub: 'Realtime Dispatcher',
    desc:
      'Immediate browser and mobile client pushes for urgent disposisi items and executive alerts.',
    status: 'Active (99.8%)',
    action: 'Test Push',
  },
]

const auditLogs = [
  {
    icon: 'key',
    iconBg: 'bg-primary/10',
    iconCls: 'text-primary',
    title: 'Role permission modified for "Staf"',
    sub: 'Admin (Budi S.) • 12m ago',
  },
  {
    icon: 'verified_user',
    iconBg: 'bg-secondary/10',
    iconCls: 'text-secondary',
    title: 'Encryption Key Vault automated rotation',
    sub: 'System Daemon • 3h ago',
  },
  {
    icon: 'warning',
    iconBg: 'bg-error/10',
    iconCls: 'text-error',
    title: 'Failed login attempt (3x threshold)',
    sub: 'IP: 192.168.4.12 • 5h ago',
  },
]

export default function PengaturanPage() {
  const [matrix, setMatrix] = useState(baseMatrix)
  const [channelOn, setChannelOn] = useState({ smtp: true, fcm: true })

  const togglePerm = (rowIdx, roleIdx) => {
    if (roleIdx === 0) return
    setMatrix((prev) =>
      prev.map((row, i) => (i === rowIdx ? { ...row, vals: row.vals.map((v, j) => (j === roleIdx ? !v : v)) } : row)),
    )
  }

  return (
    <div className="flex flex-col w-full pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
        <div>
          <div className="flex items-center gap-space-xs text-primary mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">security</span>
            <span className="text-body-sm font-bold uppercase tracking-wider">
              Enterprise Security & Governance
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Access Control & Security Protocol
          </h1>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Manage granular role permissions, cryptographic audit logs, and secure dispatch notification
            channels.
          </p>
        </div>
        <div className="flex items-center gap-space-sm">
          <button className="px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all flex items-center gap-space-xs font-label-md">
            <span className="material-symbols-outlined text-[18px]">history</span>
            <span>Export Audit Log</span>
          </button>
          <button className="px-space-md py-space-sm rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center gap-space-xs font-label-md shadow-sm">
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Save Configurations</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        <div className="lg:col-span-8 flex flex-col gap-space-xl">
          <div className="bg-surface-container-low rounded-2xl p-space-xl shadow-sm">
            <div className="flex items-center justify-between mb-space-lg">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Role-Based Access Control (RBAC)
                </h2>
                <p className="text-body-sm text-on-surface-variant">
                  Configure granular permissions for each organizational tier in the e-office suite.
                </p>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-space-xs rounded-xl">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-body-sm font-medium text-on-surface">4 Active Roles</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-variant/40">
                    <th className="py-space-md px-space-sm font-label-md text-on-surface-variant">
                      Permission Scope
                    </th>
                    {roles.map((r, i) => (
                      <th
                        key={r}
                        className={
                          'py-space-md px-space-sm text-center font-label-md ' +
                          (i === 0 ? 'text-primary font-bold' : 'text-on-surface')
                        }
                      >
                        {r}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant/20 font-body-sm text-on-surface">
                  {matrix.map((row, rowIdx) => (
                    <tr key={row.scope}>
                      <td className="py-space-md px-space-sm font-medium">{row.scope}</td>
                      {row.vals.map((checked, roleIdx) => (
                        <td key={roleIdx} className="text-center py-space-md">
                          <input
                            type="checkbox"
                            checked={checked}
                            disabled={roleIdx === 0}
                            onChange={() => togglePerm(rowIdx, roleIdx)}
                            className="accent-primary w-4 h-4 rounded"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-space-lg flex items-center justify-between pt-space-md border-t border-surface-variant/30 text-body-sm text-on-surface-variant">
              <span>* Administrator permissions are hardcoded for system integrity.</span>
              <button className="text-primary font-bold hover:underline">Add Custom Role Tier</button>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-space-xl shadow-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
              Notification Channels
            </h2>
            <p className="text-body-sm text-on-surface-variant mb-space-lg">
              Configure system alert dispatchers for incoming high-priority mail and security warnings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              {channels.map((c) => (
                <div key={c.key} className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div
                          className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center ${c.iconCls}`}
                        >
                          <span className="material-symbols-outlined">{c.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-on-surface">{c.title}</h3>
                          <span className="text-body-sm text-on-surface-variant">{c.sub}</span>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={channelOn[c.key]}
                          onChange={() => setChannelOn((p) => ({ ...p, [c.key]: !p[c.key] }))}
                        />
                        <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{c.desc}</p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-surface-variant/40 flex items-center justify-between text-body-sm">
                    <span className="text-secondary font-medium flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span> {c.status}
                    </span>
                    <button className="text-primary font-bold hover:underline">{c.action}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-xl">
          <div className="bg-surface-container-low rounded-2xl p-space-xl shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <h2 className="font-headline-md text-headline-md text-on-surface">Cryptographic Storage</h2>
              <span className="material-symbols-outlined text-secondary text-[24px]">lock</span>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-space-lg">
              All incoming and archived files are secured using hardware-backed AES-256 encryption keys.
            </p>

            <div className="bg-surface-container p-space-md rounded-xl space-y-space-md mb-space-lg">
              <div className="flex items-center justify-between">
                <span className="text-body-sm text-on-surface-variant">Algorithm</span>
                <span className="text-body-sm font-bold text-on-surface">AES-256-GCM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-body-sm text-on-surface-variant">Key Rotation Status</span>
                <span className="px-space-xs py-0.5 bg-secondary/10 text-secondary rounded text-body-sm font-medium">
                  Automated (30d)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-body-sm text-on-surface-variant">Vault Integrity</span>
                <span className="text-body-sm font-bold text-secondary">100% Verified</span>
              </div>
            </div>

            <div className="space-y-space-sm">
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Encrypted Volume Usage</span>
                <span className="font-medium text-on-surface">1.8 TB / 5.0 TB</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[36%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-space-xl shadow-sm flex-1">
            <div className="flex items-center justify-between mb-space-md">
              <h2 className="font-headline-md text-headline-md text-on-surface">Security Audit Trail</h2>
              <span className="text-body-sm text-primary font-bold cursor-pointer hover:underline">
                View All
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-space-md">
              Recent system access and privilege elevation events.
            </p>
            <div className="space-y-space-md">
              {auditLogs.map((l, idx) => (
                <div
                  key={idx}
                  className={
                    'flex items-start gap-space-sm ' +
                    (idx < auditLogs.length - 1 ? 'pb-space-md border-b border-surface-variant/30' : '')
                  }
                >
                  <div
                    className={`w-8 h-8 rounded-full ${l.iconBg} flex items-center justify-center ${l.iconCls} flex-shrink-0 mt-1`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{l.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-medium text-on-surface truncate">{l.title}</p>
                    <span className="text-body-sm text-on-surface-variant block">{l.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}