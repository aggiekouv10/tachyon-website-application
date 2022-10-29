export default function WebhookSlot({ type }) {
  return (
    <div className="w-full md:min-w-[32rem] rounded-lg border border-slate-400 shadow sm:rounded-lg md:w-[32rem]">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          Update your {type} webhook
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-200">
          <p>Change the Discord webhook for {type}</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Webhook URL
            </label>
            <input
              className="block w-full rounded-md py-2 p-4 bg-slate-900 placeholder:text-gray-400 text-white border border-slate-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="https://discord.com/webhooks/..."
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
