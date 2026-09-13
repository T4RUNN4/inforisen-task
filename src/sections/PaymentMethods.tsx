import Image from "next/image";
import NextImage from "next/image";

export default function PaymentMethods() {
  return (
    <section className="relative py-20 px-6 bg-linear-to-b from-white via-[#FFFDFB] to-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        <div className="inline-flex items-center justify-center">
          <span className="text-xs font-bold tracking-wider text-orange-500 uppercase border-b-2 border-orange-500 pb-0.5">
            Payment Methods
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Multiple Payment <span className="text-orange-500">Methods</span>
        </h2>

        <p className="text-gray-500 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
          We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and
          more, so you are never stuck at checkout. Deposits are instant, and you
          can start with as little as $1, which means there is no reason to wait
          before placing your first order.
        </p>

        <div className="relative w-full max-w-4xl mx-auto pt-6">
          <div className="relative w-full aspect-video max-h-125">
            <Image
              src="/payment.png"
              alt="World map with payment methods icons"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}