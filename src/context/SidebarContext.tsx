/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
} from 'react'

interface SidebarContextData {
  isOpen: boolean
  toggleSidebar: () => void
}

interface SidebarProviderProps {
  children: ReactNode
}

const SidebarContext = createContext({} as SidebarContextData)

export const useSidebarContext = () => useContext(SidebarContext)

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const value = useMemo(
    () => ({
      isOpen,
      toggleSidebar,
    }),
    [isOpen]
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}
