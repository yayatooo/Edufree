import React from 'react'

const LoginSection = () => {
  return (

    <section className='w-full bg-white py-20 mobile:hidden laptop:flex'>
        <div className='flex py-12 px-10 justify-center font-poppins bg-blue-primary text-white w-9/12 mx-auto'>
            <div className='w-6/12 py-12 px-8'>
                <h1 className='text-3xl font-semibold leading-relaxed pb-6'>Selangkah Lebih Dekat Dengan Impianmu</h1>
                <p>Sebuah layanan E-Learning gratis yang siap membantumu menjadi seorang ahli </p>
            </div>
            <div className='w-6/12 p-12'>
                <h2 className='text-2xl font-semibold'>Daftarkan Dirimu!</h2>
                <p className='py-8'>Persiapkan diri untuk masa depan yang penuh dengan bintang</p>

                <form className='flex flex-col gap-8'>
                    <input type='text' placeholder='Your name'  className='p-4 bg-blue-primary rounded-lg border border-white opacity-50'/>
                    <input type='email' placeholder='Email'  className='p-4 bg-blue-primary rounded-lg border border-white opacity-50'/>
                    <input type='password' placeholder='Password'  className='p-4 bg-blue-primary rounded-lg border border-white opacity-50'/>
                    <button className='p-4 bg-yellow-primary text-black-primary font-semibold rounded-lg'>Daftar</button>
                </form>
                <p className='text-center py-4'>Sudah punya akun? <a className='underline'>Login</a></p>
            </div>
        
        </div>
    </section>

    
  )
}

export default LoginSection
