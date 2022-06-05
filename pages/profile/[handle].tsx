import Image from "next/image"


const Profile = () => {
  return (
    <div>
        <div className='relative w-full h-44'>
            <Image 
                src={`https://avatar.tobi.sh/${"fhjdfdw"}.png`}
                layout="fill"
            />
        </div>
        <div>
            <div className='relative bottom-12 left-4 w-20 h-20 rounded-2xl border-4 border-white'>
                <Image 
                    src={`https://avatar.tobi.sh/${"znx78348ef"}.png`}
                    layout="fill"
                    className="rounded-2xl"
                />
            </div>
            <div className="px-4 -mt-8">
                <p className='text-2xl font-black'>sir_adek</p>
                <p className='text-sm font-black text-theme-blue'>@sir_adek.lens</p>
            </div>
        </div>
    </div>
  )
}

export default Profile