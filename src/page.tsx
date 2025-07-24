import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="landing landing1">
        <div className="landingContainer">
          <img src="nearzy_logo.png" alt="Logo" />
          <div className="subtitle">
            <h3>Your Local Vendors <br/> are now <span>Online</span> </h3>

          </div>
          <p>get anything within an hour</p>

          <Link href="/home"> <button className="goTo"><span> Go to Site </span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> </button></Link>
        </div>
      </section>
      <section className="landing landing2">
        <div className="landingContainer">
          <h2>Explore Near You</h2>
          <h3>explore it in</h3>
          <img src="nearzy_logo.png" alt="logo" />
          <Link href="/home"> <button className="goTo"><span> Go to Site </span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> </button></Link>
        </div>
      </section>
      <section className="landing landing3">

      </section>
    </>
  );
}
