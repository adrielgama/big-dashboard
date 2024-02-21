import { Sidebar } from '@/components/sidebar'

import { Sheet } from './components/sheet'
import { useSidebarContext } from './context/SidebarContext'
import { Panel } from './pages'

function App() {
  const { isOpen } = useSidebarContext()
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <div
        className={`ml-12 flex w-full bg-gray-100 p-4 transition-all ${isOpen ? 'lg:ml-64' : ''}`}
      >
        <Panel title="Painel" subtitle="As últimas atualizações de hoje" />
      </div>
      <div className="hidden lg:block">
        <Sheet
          mainTitle="Tarefas de hoje"
          additionalTitle="Projetos recentes"
        />
      </div>
    </div>
  )
}

export default App
