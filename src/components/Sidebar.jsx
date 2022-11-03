/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ updateType }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [navigation, setNavigation] = useState([
    {
      name: 'Footsites',
      icon: FolderIcon,
      categories: [
        {
          Footlocker: [
            'AT',
            'BE',
            'CA',
            'CZ',
            'DE',
            'DK',
            'ES',
            'FR',
            'GR',
            'HU',
            'IE',
            'IT',
            'LU',
            'NL',
            'NO',
            'PL',
            'PT',
            'SE',
            'UK',
            'US',
          ],
        },
        'Kids Footlocker',
        'Champs',
        'Footaction',
      ],
      current: true,
    },
    {
      name: 'Reddit Deals',
      icon: FolderIcon,
      categories: ['Buildapcsales', 'Deals', 'Freebies', 'Game', 'Sneaker'],
      current: false,
    },
    {
      name: 'Slick Deals',
      categories: [
        'Freebies',
        'Coupons',
        'Hot Deals',
        'Popular Deals',
        'Brickseek',
      ],
      icon: FolderIcon,
      current: false,
    },
    {
      name: 'Releases',
      icon: FolderIcon,
      categories: ['Raffles', 'Supreme', 'Palace'],
      current: false,
    },
    {
      name: 'Shopify',
      categories: [
        {
          Filtered: ['US', 'EU', 'CA'],
        },
        {
          Unfiltered: ['US', 'EU', 'CA'],
        },
        {
          Pings: ['Bots', 'Queue', 'Password', 'Checkpoint'],
        },
        {
          Kith: ['US', 'EU'],
        },
        {
          DSM: ['US', 'SG', 'JP', 'UK'],
        },
        {
          Palace: ['US', 'UK'],
        },
        'Undefeated',
        'Travis',
        'Cpfm',
        'Dtlr',
        'Kaws',
        'Pescolo',
        'Bape',
        'Jimmyjazz',
        'Snk',
        'Ycmc',
        'Funko',
        'Packer',
      ],
      icon: FolderIcon,
      current: false,
    },
    {
      name: 'Stocks & Crypto',
      categories: [
        {
          News: ['Crypto', 'Stocks'],
        },
        {
          Crypto: [
            'Bitcoin',
            'Binance',
            'Doge',
            'XRP',
            'Monero',
            'Stellar',
            'Litecoin',
            'Chainlink',
            'Ethereuem',
            'Polkadot',
          ],
        },
        {
          Stocks: [
            'S&P 500',
            'Google',
            'Netflix',
            'Spotify',
            'Amazon',
            'Ebay',
            'Apple',
            'Gamestop',
            'Dow Jones',
            'Crude Oil',
            'Gold',
          ],
        },
        'Stocks News',
      ],
      icon: FolderIcon,
      current: false,
    },
    {
      name: 'AIO',
      categories: [
        {
          Filtered: ['US', 'EU'],
        },
        {
          Snipes: ['US', 'EU'],
        },
        'Finishline/JD',
        'Solebox',
        'Onygo',
        'LVR',
        'END',
        'Revolve',
        'Offspring',
        'Nordstrom',
        'Hibbett',
        'Boxlunch',
        'Hot-topic',
        'Lacoste',
        'Footshop',
        'Svd',
        'Asos',
        'Courir',
        'Mr-porter',
        'Net-a-porter',
        'Crocs',
        'New Balance',
        'DSG',
        'SNS',
        'Sportschek',
        'Golftown',
      ],
      icon: FolderIcon,
      current: false,
    },
    {
      name: 'Retail',
      categories: [
        {
          Walmart: ['US', 'CA'],
        },
        {
          Newegg: ['US', 'CA'],
        },
        {
          Bestbuy: ['US', 'CA'],
        },
        {
          AMD: ['US', 'CA'],
        },
        {
          Gamestop: ['US', 'CA'],
        },
        {
          Amazon: ['US', 'UK', 'CA', 'DE', 'ES', 'FR', 'IT'],
        },
        'US Mint',
        'Canada Computers',
        'Toysrus CA',
        'Curry UK',
        'Home Depot',
        'Target',
        'Disney',
        'Sams Club',
        'Playstation',
        'Topps',
        'Argos UK',
        'BNH',
        'Aldi',
        'Office Depot',
        'Evga US',
        'Tesla',
        'Razer',
      ],
      icon: FolderIcon,
      current: false,
    },
    {
      name: 'Supreme',
      categories: ['US', 'EU', 'JP'],
      icon: FolderIcon,
      current: false,
    },
    {
      name: 'SNKRS',
      categories: [
        'AU',
        'BE',
        'CA',
        'CL',
        'CN',
        'DE',
        'ES',
        'FR',
        'GB',
        'ID',
        'IE',
        'IN',
        'IT',
        'JP',
        'MY',
        'NL',
        'NZ',
        'PH',
        'PL',
        'RU',
        'SG',
        'US',
      ],
      icon: FolderIcon,
      current: false,
    },
  ])

  const toggleWebhook = (name) => {
    console.log(name)
    updateType(name)
  }

  const updateCurrent = (name) => {
    let temp = [...navigation]
    console.log(temp)
    for (let item of temp) {
      if (item.name == name) {
        console.log(item.current)
        if (item.current) item.current = false
        else item.current = true
      } else {
        item.current = false
      }
    }
    setNavigation(temp)
  }

  return (
    <>
      <div className="z-10">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-slate-800 " />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-slate-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <h3 className="text-lg font-medium leading-6 text-white">
                      Webhook Editor
                    </h3>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="select-none space-y-1 px-2">
                      {navigation.map((item) => (
                        <div>
                          <div
                            key={item.name}
                            onClick={() => updateCurrent(item.name)}
                            className={classNames(
                              item.current
                                ? 'bg-slate-900 text-white'
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white',
                              'group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-gray-300'
                                  : 'text-gray-400 group-hover:text-gray-300',
                                'mr-4 h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </div>
                          {item.current && (
                            <div className="flex flex-col">
                              {item.categories.map((category) => {
                                if (typeof category === 'string') {
                                  return (
                                    <div
                                      onClick={() => {
                                        toggleWebhook(
                                          `${item.name} ${category}`
                                        )
                                      }}
                                      key={category}
                                      className="group flex cursor-pointer items-center rounded-md px-2 py-2 pl-6  text-xs font-medium text-gray-300 hover:bg-slate-700 hover:text-white"
                                    >
                                      <PaperClipIcon
                                        className={classNames(
                                          item.current
                                            ? 'text-gray-300'
                                            : 'text-gray-400 group-hover:text-gray-300',
                                          'mr-4 h-4 w-4 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                      />
                                      {category}
                                    </div>
                                  )
                                }
                                if (typeof category === 'object') {
                                  const label = Object.keys(category)
                                  const values = category[label]
                                  const data = values.map((value) => {
                                    return (
                                      <div
                                        onClick={() => {
                                          toggleWebhook(
                                            `${item.name} ${label} ${value}`
                                          )
                                        }}
                                        key={value}
                                        className="group flex cursor-pointer items-center rounded-md px-2 py-2 pl-12  text-xs font-medium text-gray-300 hover:bg-slate-700 hover:text-white"
                                      >
                                        <PaperClipIcon
                                          className={classNames(
                                            item.current
                                              ? 'text-gray-300'
                                              : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-4 h-4 w-4 flex-shrink-0'
                                          )}
                                          aria-hidden="true"
                                        />
                                        {value}
                                      </div>
                                    )
                                  })
                                  return (
                                    <>
                                      <div
                                        key={label}
                                        className={classNames(
                                          'group flex cursor-pointer items-center rounded-md px-2 py-2 pl-6 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white'
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            'mr-4 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-300'
                                          )}
                                          aria-hidden="true"
                                        />
                                        {label}
                                      </div>
                                      {data}
                                    </>
                                  )
                                }
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-slate-800">
            <div className="mt-8 flex flex-1 flex-col overflow-y-auto">
              <h3 className="mx-auto flex select-none items-center justify-center gap-2 rounded-lg bg-slate-900 p-4 text-lg font-medium leading-6 text-white">
                <InboxIcon className="h-6 w-6 text-slate-400"></InboxIcon>
                Webhook Folders
              </h3>
              <nav className="mt-4 flex-1 select-none space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <div>
                    <div
                      key={item.name}
                      onClick={() => updateCurrent(item.name)}
                      className={classNames(
                        item.current
                          ? 'bg-slate-900 text-white'
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white',
                        'group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium transition-all'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
                          'mr-4 h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    {item.current && (
                      <div className="flex flex-col">
                        {item.categories.map((category) => {
                          if (typeof category === 'string') {
                            return (
                              <div
                                onClick={() => {
                                  toggleWebhook(`${item.name} ${category}`)
                                }}
                                key={category}
                                className="group flex cursor-pointer items-center rounded-md px-2 py-2 pl-6 text-xs  font-medium text-gray-300 transition-all hover:bg-slate-700 hover:text-white"
                              >
                                <PaperClipIcon
                                  className={classNames(
                                    item.current
                                      ? 'text-gray-300'
                                      : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-4 h-4 w-4 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                                {category}
                              </div>
                            )
                          }
                          if (typeof category === 'object') {
                            const label = Object.keys(category)
                            const values = category[label]
                            const data = values.map((value) => {
                              return (
                                <div
                                  onClick={() => {
                                    toggleWebhook(
                                      `${item.name} ${label} ${value}`
                                    )
                                  }}
                                  key={value}
                                  className="group flex cursor-pointer items-center rounded-md px-2 py-2 pl-12 text-xs font-medium  text-gray-300 transition-all transition-all hover:bg-slate-700 hover:text-white"
                                >
                                  <PaperClipIcon
                                    className={classNames(
                                      item.current
                                        ? 'text-gray-300'
                                        : 'text-gray-400 group-hover:text-gray-300',
                                      'mr-4 h-4 w-4 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {value}
                                </div>
                              )
                            })
                            return (
                              <>
                                <div
                                  key={label}
                                  className={classNames(
                                    'group flex cursor-pointer items-center rounded-md px-2 py-2 pl-6 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      'mr-4 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-300'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {label}
                                </div>
                                {data}
                              </>
                            )
                          }
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 w-max flex-shrink-0 bg-transparent shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
