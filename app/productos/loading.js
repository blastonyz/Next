import  Image  from 'next/image'

const Loading = () => {
       return(   
        <div className="flex justify-center items-center h-screen">  
            <div className= 'my-auto py-45 flex justify-center items-center'>
                <Image src={'/loader1.png'}
                alt="Iron logo"
                width= {250}
                height={250}
                className="animate-pulse" />
            </div>
            </div>    
       )
}

export default Loading;