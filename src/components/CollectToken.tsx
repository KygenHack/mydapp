import React from 'react'

const CollectTokenCard = () => {
  return (
    <div className='bg-stats'>
   <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
   <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 lg:text-5xl text-4xl font-bold tracking-tight headerColor sm:text-4xl">
          COLLECT FREE TOKEN
          </p>
          <p className="mt-4 text-lg leading-8 text-p">
          Earn 100,000 free TRC tokens by completing the tasks below and submitting screenshots for each task:

          </p>
        </div>
<div className="grid mt-5 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  <div className="bg-features glass text-p p-4 shadow-md rounded-lg">
  <p>Join TRC Community on  <a href="https://twitter.com/CryptoUnityCUT/status/1717983647209324872">Telegram</a></p>
  </div>

  <div className="bg-features glass text-p p-4 shadow-md rounded-lg">
  <p>Follow TRC Channel on <a href="https://twitter.com/CryptoUnityCUT/status/1717983647209324872">Telegram</a> Channel</p>
  </div>

  <div className="bg-features glass text-p p-4 shadow-md rounded-lg">
  <p>Follow TRC Updates on <a href="https://twitter.com/CryptoUnityCUT/status/1717983647209324872">Twitter</a></p>
  </div>

  <div className="bg-features  glass text-p p-4 shadow-md rounded-lg">
  <p>Follow TRC on <a href="https://twitter.com/CryptoUnityCUT/status/1717983647209324872">Medium</a> Blog</p>
  </div>

  <div className="bg-features glass text-p p-4 shadow-md rounded-lg">
  <p>Like TRC Community on <a href="https://twitter.com/CryptoUnityCUT/status/1717983647209324872">Facebook</a> Page</p>
  </div>

  <div className="bg-features glass text-p p-4 shadow-md rounded-lg">
  <p>Like and retweet our <a href="https://twitter.com/CryptoUnityCUT/status/1717983647209324872">Twitter</a> post</p>
  </div>

</div>

    <p className="mx-auto mt-5 mb-5 text-p"><strong><mark>Disclaimer</mark>: </strong>When taking a screenshot, keep in mind that it has to be visible who shared the post so we can confirm the task is done right. Do not upload pictures of our own posts on our social media, screenshots of our website, the free TRC form, your wallet etc.<em> </em><strong><em>DO NOT share the free TRC task post, unless the instructions say so – </em>if the task is not done correctly or it isn’t visible who completed the task, you are not entitled to receive free TRC tokens.</strong></p>

    <form
      action=""
      className="mb-0 mt-6 bg-features glass border-yellow-200 space-y-4 rounded-lg p-7 shadow-lg sm:p-6 lg:p-8"
    >
      <div>
        <label htmlFor="email" className="text-p">Your BSC wallet address (BEP 20)
</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-indigo-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter BSC Wallet Address (BEP-20)"
          />
          <p className='text-p'>What is a BSC wallet (address)?
How do I get a BSC wallet address? – <a href="https://www.youtube.com/watch?v=ThaOEutpP4E">check our video guide</a> </p>
        </div>

      </div>

      <div>
        <label htmlFor="email" className="text-p">Your Email *</label>

        <div className="relative">
          <input
            type="Email"
            className="w-full rounded-lg border-indigo-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Email Address"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-p">Upload Screenshot *</label>
        <div className="relative">
        <input type="file" className="file-input file-input-bordered w-full" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-p">What do you like about TRC Coin*</label>
        <div className="relative">
        <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Submit
      </button>

    </form>
</div>
</div>
  )
}

export default CollectTokenCard