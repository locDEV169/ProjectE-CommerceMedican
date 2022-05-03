import { default as notification } from 'antd/es/notification'
import 'antd/es/notification/style/index.css'
import React from 'react'
import { useHistory } from 'react-router'
import api from '../../../constants/api'
import SubCategoriesForm from '../form-sub-category'
interface Values {
    name?: string,
    category?: object
}

export default function AddSubCategoriesPage() {
    const history = useHistory()

    const onAddSubCategories = (values: Values) => {
        api.post('sub-categories/create', {
            ...values
        }).then(() => {
            notification.success({
                message: 'Sub-Categories added successfully',
                description: 'Added successful Sub-Categories'
            })
            history.goBack()
        })
    }

    return <SubCategoriesForm onSubmit={onAddSubCategories} />
}
