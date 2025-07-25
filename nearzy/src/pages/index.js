import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="landing-page">
      <Image
        src="/landing-img.jpg"
        alt="E-commerce background"
        fill
        className="landing-bg"
        priority
      />
      <div className="landing-overlay" />

      <div className="landing-content">
        <h1 className="landing-title">NearZy</h1>
        <p className="landing-subtitle">Your one-stop shopping destination</p>
        <Link href="/home" className="landing-btn">
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
