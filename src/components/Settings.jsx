/* eslint-disable @next/next/no-img-element */
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Settings({ group }) {
  const [color, setColor] = useState(group.embed.color || '')
  const [image, setImage] = useState(group.embed.image || '')
  const [footer, setFooter] = useState(group.embed.footer || '')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const updateEmbedSettings = async (e) => {
    e.preventDefault()

    try {
      if (color == '' || image == '' || footer == '') {
        setError("You can't leave any fields blank.")
        setSuccess('')
        return
      }
      const res = await fetch('/api/update-embed-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: group.groupId,
          color,
          image,
          footer,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess('Successfully updated embed settings.')
        setError('')
      } else {
        setError("We couldn't update embed settings. Please try again later.")
        setSuccess('')
      }
    } catch (error) {
      setError("We couldn't update embed settings. Please try again later.")
      console.log(error)
    }
  }
  return (
    <div className="mt:px-0 mx-6 mt-6  w-full rounded-lg border border-slate-400 shadow sm:rounded-lg md:mt-0 md:ml-[16rem] md:w-[32rem] md:min-w-[32rem] lg:w-[48rem] 2xl:w-[64rem]">
      <div className="rounded-lg border-b border-gray-200 bg-slate-800 px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          Embed Editor
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Make your webhooks flavourful and truly yours.
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          Update your embed looks here
        </h3>
        <form className="mt-1 sm:flex sm:flex-col sm:items-center">
          <div className="w-full ">
            <div className="mt-2 max-w-xl text-sm text-gray-200">
              <p className="font-bold">Embed Color</p>
            </div>
            <input
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
              className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="#000000"
            />
            <div className="mt-2 flex gap-2 text-sm text-white">
              Preview{' '}
              <div
                style={{ backgroundColor: color }}
                className={`h-6 w-6 rounded-md border border-slate-400`}
              ></div>
            </div>
          </div>
          <div className="w-full ">
            <div className="mt-2 max-w-xl text-sm text-gray-200">
              <p className="font-bold">Embed Image</p>
            </div>
            <input
              value={image}
              onChange={(e) => {
                setImage(e.target.value)
              }}
              className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="https://example.com/image.png"
            />
            <div className="mt-2 flex gap-2 text-sm text-white">
              Preview <img src={image} alt="" className={`h-6 w-6`} />
            </div>
          </div>
          <div className="w-full ">
            <div className="mt-2 max-w-xl text-sm text-gray-200">
              <p className="font-bold">Embed Footer</p>
            </div>
            <input
              value={footer}
              onChange={(e) => {
                setFooter(e.target.value)
              }}
              className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Powered by Tachyon"
            />
          </div>
          {success && (
            <div className="text-medium mt-4 flex w-full gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-green-500"></CheckBadgeIcon>
              <p className="text-green-500">{success}</p>
            </div>
          )}
          {error && (
            <div className="text-medium mt-4 flex w-full gap-2">
              <ExclamationCircleIcon className="h-6 w-6 text-red-500"></ExclamationCircleIcon>
              <p className="text-red-500">{error}</p>
            </div>
          )}
          <button
            onClick={(e) => {
              updateEmbedSettings(e)
            }}
            type="submit"
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent  bg-[#53b3e9] px-4 py-2 font-medium text-white shadow-sm transition-all hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-6 sm:text-sm"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
