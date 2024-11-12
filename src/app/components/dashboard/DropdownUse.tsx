import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function DropdownUse() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton
                    className="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_696_109)">
                            <path
                                d="M12.0001 4C13.1047 4 14.0001 3.10457 14.0001 2C14.0001 0.89543 13.1047 0 12.0001 0C10.8956 0 10.0001 0.89543 10.0001 2C10.0001 3.10457 10.8956 4 12.0001 4Z"
                                fill="white"/>
                            <path
                                d="M12.0001 14.0003C13.1047 14.0003 14.0001 13.1049 14.0001 12.0003C14.0001 10.8957 13.1047 10.0003 12.0001 10.0003C10.8956 10.0003 10.0001 10.8957 10.0001 12.0003C10.0001 13.1049 10.8956 14.0003 12.0001 14.0003Z"
                                fill="white"/>
                            <path
                                d="M12.0001 23.9997C13.1047 23.9997 14.0001 23.1043 14.0001 21.9997C14.0001 20.8951 13.1047 19.9997 12.0001 19.9997C10.8956 19.9997 10.0001 20.8951 10.0001 21.9997C10.0001 23.1043 10.8956 23.9997 12.0001 23.9997Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_696_109">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            View
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            Edit
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                           Delete
                        </a>
                    </MenuItem>

                </div>
            </MenuItems>
        </Menu>
    )
}
