import  Image  from 'next/image'

const Loading = () => {
       return(     
            <div className='mt-45 p-45 min-h-screen flex justify-center items-center'>
                <Image src={'/loader1.png'}
                alt="Iron logo"
                width= {250}
                height={250}
                className= "animate-pulse" />
            </div>
       )
}

export default Loading;