export default function AdvantagesHeader() {
  return (
    <div className="text-center space-y-3 max-w-2xl mx-auto">
      <div className="inline-flex items-center justify-center">
        <span className="text-xs font-bold tracking-wider text-orange-500 uppercase border-b-2 border-orange-500 pb-0.5">
          ADVANTAGES
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        Advantages of using <span className="text-orange-500">our panel services</span>
      </h2>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
      </p>
    </div>
  );
}