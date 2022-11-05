import { useEffect, useState } from 'react'
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'

export default function WebhookSlot({ group, type, webhooks, setWebhooks }) {
  const formatType = (type) => {
    return type.replaceAll(/\s/g, '').toUpperCase()
  }

  const [webhook, setWebhook] = useState(webhooks[formatType(type)] || '')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    setWebhook(webhooks[formatType(type)] || '')
    setSuccess('')
    setError('')
  }, [type])

  const saveWebhook = async (e) => {
    e.preventDefault()

    try {
      if (webhook == '') {
        setError("You can't leave any fields blank.")
        setSuccess('')
        return
      }
      const res = await fetch('/api/save-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: group.groupId,
          type: formatType(type),
          webhook,
        }),
      })

      const data = await res.json()

      if (data.success) {
        const temp = { ...webhooks }
        temp[formatType(type)] = webhook
        setWebhooks(temp)
        setSuccess('Successfully updated webhook.')
        setError('')
      } else {
        setError("We couldn't update the webhook. Please try again later.")
        setSuccess('')
      }
    } catch (error) {
      setError("We couldn't update the webhook. Please try again later.")
      console.log(error)
    }
  }

  return (
    <div className="mt:px-0 mx-6 mt-6 w-full rounded-lg border border-slate-400 shadow sm:rounded-lg md:ml-[15rem] md:mt-6 md:w-[40rem] md:min-w-[32rem] 2xl:w-[64rem]">
      <div className="rounded-lg border-b border-gray-200 bg-slate-800 px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          Webhook Editor
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Make the available changes here, and hit Save. We can handle the rest.
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          Update your {type} webhook
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-200">
          <p>Change the Discord webhook for {type}</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full ">
            <label htmlFor="email" className="sr-only">
              Webhook URL
            </label>
            <input
              value={webhook}
              onChange={(e) => {
                setWebhook(e.target.value)
              }}
              className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="https://discord.com/webhooks/..."
            />
          </div>
          <button
            onClick={(e) => {
              saveWebhook(e)
            }}
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent  bg-[#53b3e9] px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Save
          </button>
        </form>
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
      </div>
    </div>
  )
}
