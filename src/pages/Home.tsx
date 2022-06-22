export default function Home() {
  return (
    <>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Home
          </h2>
        </div>
      </header>
      <main>
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="overflow-hidden border-4 border-gray-200 border-dashed rounded-lg h-96">
              <img
                className="object-cover object-center w-full h-full"
                alt="racing car"
                src="https://images.unsplash.com/photo-1619229725920-ac8b63b0631a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
              />
            </div>
            <div className="mt-8 space-y-4">
              <p>
                In this workshop we'll build a fully functioning application for
                our music event called the Unicorn Music Festival.
                We'll demonstrate how to create a serverless web application
                that delivers real-time data to music fans based on their location, 
                and event updates. By going through this workshop
                you'll gain a solid understanding of how to connect the
                front-end of your application to a robust, performant
                cloud-enabled backend that delivers real-time updates.
              </p>
              <p>
                We'll provide practical hands-on experience on how to easily
                create a back-end with sophisticated functionality such as
                GraphQL, subscriptions and location awareness.
                In this worlkshop we'll build a serverless web application that will allow users to chat, 
                get notified about festival news and events in real-time and 
                receive location-based notification anytime they approach a 
                specific point-of-interest within the festival large area.
                &nbsp;
                <span className="font-bold text-aurora">
                  Let's get ready to rock!
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
