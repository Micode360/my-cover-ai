import Link from "next/link"
import React, { useRef } from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from '@chakra-ui/react'

export default function DrawerComp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<SVGSVGElement>(null)
  
    return (                
      <>
        <svg ref={btnRef} onClick={onOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay
            bgColor="#eee"
            zIndex="20"
          />
          <DrawerContent
           zIndex="21"
           borderRadius="8px"
           w="93%"
           bgColor="#ffffff"
           >
            <DrawerCloseButton zIndex="21"/>
            
  
            <DrawerBody>
              <Link href="/" className="text-black">Home</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }