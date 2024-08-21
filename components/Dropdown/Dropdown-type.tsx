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
import { MdKeyboardArrowDown } from "react-icons/md";

export function DropdownType({ value, onValueChange }: any) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                <Button variant="outline"><p className="mr-10">Type</p><MdKeyboardArrowDown /></Button>
                

                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">

                <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
                    <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Tv">Tv</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="movie">movie</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Ova">Ova</DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
