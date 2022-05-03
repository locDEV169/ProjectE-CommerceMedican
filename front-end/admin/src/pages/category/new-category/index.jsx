import { FrownOutlined } from '@ant-design/icons'
import 'antd/es/input/style/css'
import { default as notification } from 'antd/es/notification'
import 'antd/es/notification/style/index.css'
import { default as React } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../constants/api'
import CategoriesForm from './../form-category/index';

interface Values {
    name: string,
    description: string,
    image: string,
    video: string,
    referenceLink: string,
    categoryId?: number
}

export default function AddCategoriesPage() {
    // const url = `${URL_UPLOAD}`
    const history = useHistory()

    const onAddCategories = (values: Values) => {
        console.log(values)
        // const convertLinkVideo = values.referenceLink ? `${'//www.youtube.com/embed/' + UploadLink(values.referenceLink)}` : ''
        // api.post('/categories/create', {
        //     // ...values,
        //     // image: values.image.toString(),
        // })
        //     .then(() => {
        //         notification.success({
        //             message: 'Categories added successfully',
        //             description: 'Added successful categories'
        //         })
        //         history.push('/categories')
        //     })
        //     .catch(() => {
        //         return notification.error({
        //             message: 'Product has been added Failed',
        //             icon: <FrownOutlined style={{ color: '#f21b3b' }} />
        //         })
        //     })
    }

    return <CategoriesForm onSubmit={onAddCategories} />
}
