export default function ConfiguracoesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black italic uppercase tracking-tight">Configurações</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Gerencie todas as configurações da Liga de Quebrada</p>
      </div>
      {children}
    </div>
  );
}
