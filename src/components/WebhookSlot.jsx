export default function WebhookSlot({ type }) {
  return (
    <div className="w-full md:ml-[20rem] md:mt-0 mt-6 mt:px-0 mx-6 rounded-lg border border-slate-400 shadow sm:rounded-lg md:w-[40rem] 2xl:w-[64rem] md:min-w-[32rem]">
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
              className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="https://discord.com/webhooks/..."
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent  bg-[#53b3e9] px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
