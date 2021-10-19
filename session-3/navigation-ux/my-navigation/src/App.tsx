/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import tw, { css, TwStyle } from 'twin.macro'
import LogoMirahi from '../public/LogoMirahi.svg'
import LCR from '../public/light-code-review.svg'
import LC from '../public/light-consulting.svg'
import LES from '../public/light-engineering-support.svg'
import LPD from '../public/light-product-dev.svg'
import LT from '../public/light-training.svg'
import Angular from '../public/angular-icon.svg'
import Ansible from '../public/ansible.svg'
import DesignThinking from '../public/design-thinking-icon.svg'
import Docker from '../public/docker-icon.svg'
import Javascript from '../public/javascript.svg'
import ReactIcon from '../public/react.svg'

const services = [
  {
    name: 'Consulting',
    description: "Medium or long-term engineering projects.",
    href: '#',
    icon: LC,
  },
  {
    name: 'Product development',
    description: "From ideation to delivery.",
    href: '#',
    icon: LPD,
  },
  {
    name: 'Critical Engineering & Support',
    description: "Short-term support to ship your critical projects.",
    href: '#',
    icon: LES
  },
  {
    name: 'Mentorship & Code Review',
    description: "One-on-one personalized coaching and pair-programming sessions.",
    href: '#',
    icon: LCR,
  },
  {
    name: 'Trainings',
    description: "Offline training sessions in several trendy technologies.",
    href: '#',
    icon: LT,
  },
]

const trainings = [
  {
    name: 'Design thinking workshop',
    description: "Get to discover our design thinking strategy process to create an efficient, innovative, and user-centered design for your users..",
    href: '#',
    icon: DesignThinking,
  },
  {
    name: 'React For Beginners',
    description: "Deep dive into React from scratch and create your first project including hooks, data fetching and more!",
    href: '#',
    icon: ReactIcon,
  },
  {
    name: 'Angular For Beginners',
    description: "Get to understand the philosophy and functioning of the Angular framework and create your first applications with TypeScript and RxJS.",
    href: '#',
    icon: Angular
  },
  {
    name: 'Docker Training',
    description: "Get to discover Docker and master how to manage containerized applications.",
    href: '#',
    icon: Docker,
  },
  {
    name: 'Ansible training',
    description: "Get to discover Ansible and understand how to create centralized infrastructure management.",
    href: '#',
    icon: Ansible,
  },
]

function classNames(...classes: TwStyle[]) {
  return classes.filter(Boolean)
}


type CustomPopoverProps = {
  hidden?: boolean;
  items: { name: string; description: string; href: string; icon: string; }[]
  title: string;
}

const CustomPopover = ({ hidden, items, title }: CustomPopoverProps) => {
  return <Popover>
    {({ open }) => (
      <>
        <Popover.Button
          css={classNames(
            open ? tw`text-gray-900` : tw`text-gray-500`,
            tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`
          )}
        >
          <ChevronDownIcon
            tw="ml-2 h-5 w-5 group-hover:text-gray-500"
            aria-hidden="true"
          />
          {title}
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel css={[
            hidden && tw`hidden`,
            tw`md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white`]}>
            <div tw="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  tw="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                >
                  <div tw="flex md:h-full lg:flex-col">
                    <div tw="flex-shrink-0">
                      <span tw="inline-flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12">
                        <img src={item.icon} tw="h-10 w-10" aria-hidden="true" />
                      </span>
                    </div>
                    <div tw="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                      <div>
                        <p tw="text-base font-medium text-gray-900">{item.name}</p>
                        <p tw="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
}


export default function Example() {
  return (
    <Popover tw="relative bg-white">
      <div tw="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div tw="relative z-20">
        <div tw="max-w-7xl flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8">
          <div>
            <a href="#" tw="flex">
              <span tw="sr-only">Workflow</span>
              <img
                tw="h-8 w-auto sm:h-10"
                src={LogoMirahi}
                alt=""
              />
            </a>
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <CustomPopover title="Services" items={services} />
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span tw="sr-only">Open menu</span>
              <MenuIcon tw="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div tw="hidden  md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" tw="flex space-x-10">
              <CustomPopover title="Services" items={services} hidden />

              <CustomPopover title="Trainings" items={trainings} hidden />
              <a href="#" tw="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
              <a href="#" tw="text-base font-medium text-gray-500 hover:text-gray-900">
                Case study
              </a>
              <button tw="border rounded-full px-6 border-blue-900">
                Contact
              </button>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      css={classNames(
                        open ? tw`text-gray-900` : tw`text-gray-500`,
                        tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`
                      )}
                    >
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel tw="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                        <div tw="absolute inset-0 flex">
                          <div tw="bg-white w-1/2" />
                          <div tw="bg-gray-50 w-1/2" />
                        </div>
                        <div tw="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                          <nav tw="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <h3 tw="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                            </div>
                          </nav>
                          <div tw="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 tw="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                From the blog
                              </h3>
                            </div>
                            <div tw="mt-6 text-sm font-medium">
                              <a href="#" tw="text-indigo-600 hover:text-indigo-500">
                                {' '}
                                View all posts <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          tw="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div tw="pt-5 pb-6 px-5 sm:pb-8">
              <div tw="flex items-center justify-between">
                <div>
                  <img
                    tw="h-8 w-auto"
                    src={LogoMirahi}
                    alt="Workflow"
                  />
                </div>


                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-1"
                >
                  <Popover.Panel tw="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                    <div tw="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                      {services.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          tw="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                        >
                          <div tw="flex md:h-full lg:flex-col">
                            <div tw="flex-shrink-0">
                              <span tw="inline-flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12">
                                <img src={item.icon} tw="h-10 w-10" aria-hidden="true" />
                              </span>
                            </div>
                            <div tw="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                              <div>
                                <p tw="text-base font-medium text-gray-900">{item.name}</p>
                                <p tw="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
                <div tw="-mr-2">
                  <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span tw="sr-only">Close menu</span>
                    <XIcon tw="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div tw="py-6 px-5">
                <div tw="w-full flex space-x-12 justify-center">
                  <a href="#" tw="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    G
                  </a>
                  <a href="#" tw="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    T
                  </a>
                  <a href="#" tw="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    L
                  </a>
                </div>
              </div>
              <div tw="mt-6 sm:mt-8 ">
                <nav>
                  <div tw="flex justify-center">
                    <a tw="block min-w-full">
                      <div tw="ml-4 text-base font-medium text-gray-900">Services</div>
                    </a>
                    <a tw="block min-w-full">
                      <div tw="ml-4 text-base font-medium text-gray-900">Trainings</div>
                    </a>
                    <a tw="block min-w-full">
                      <div tw="ml-4 text-base font-medium text-gray-900">About</div>
                    </a>
                    <a tw="block min-w-full">
                      <div tw="ml-4 text-base font-medium text-gray-900">Case Study</div>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
