import EditForm from "@/app/components/admin/EditForm"

const EditPage = async ({params}) => {
    const {id} = params
    const item = await fetch(`http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}/api/producto/${id}`,{cache: 'no-store'}).then(res => res.json())

    return(
        <div>
            <EditForm item={item}/>
        </div>
    )
}

export default EditPage