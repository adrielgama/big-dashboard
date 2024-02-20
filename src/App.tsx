import { Sidebar } from '@/components/sidebar'

import { Sheet } from './components/sheet'
import { Panel } from './pages'

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="ml-12 flex flex-1 flex-col bg-gray-100 p-4 transition-all lg:ml-64">
        <Panel />
      </div>
      <div>
        <Sheet />
      </div>
    </div>
  )
}

export default App
