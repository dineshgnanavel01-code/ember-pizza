export default function DealCard() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8">

      <div className="overflow-hidden rounded-3xl bg-slate-900 p-6 text-white md:p-8">

        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

          <div>
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold">
              LIMITED TIME
            </span>

            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Buy 2 Pizzas & Get 1 Free
            </h2>

            <p className="mt-2 text-slate-300">
              Use code <strong>PIZZA50</strong> at checkout.
            </p>
          </div>

          <button className="rounded-full bg-white px-6 py-3 font-bold text-slate-900">
            View Deal
          </button>

        </div>

      </div>
    </section>
  );
}