"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md"

export function DropdownMenuRadioGroupDemo({ value, onValueChange }: any) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
           
                <Button variant="outline"><p className="mr-10">Filter </p> <MdKeyboardArrowDown />
                </Button>
               
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">

                <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
                    <DropdownMenuRadioItem value="upcoming">upcoming</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="airing">airing</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bypopularity">popularity</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
