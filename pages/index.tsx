import { useDummyList } from '@/src/api/demo'
import { hasPermissions, PermissionTypes } from '@/src/utils/hasPermissions'
import { Button } from 'antd'
import useTranslation from 'next-translate/useTranslation'
const Home = () => {
    const { t } = useTranslation()
    const { data } = useDummyList()

    const features: Record<number, PermissionTypes> = {
        '1': {
            name: 'login',
            canEdit: true,
            canCreate: true,
            display: false,
        },
        '2': {
            name: 'adminDashboard',
            canEdit: true,
            canCreate: true,
            display: true,
        },
        '101': {
            name: 'Signup',
            canEdit: true,
            canCreate: true,
            display: true,
        },
    }

    return (
        <>
            <h1>{t('common:title')}</h1>
            <ul>
                {data?.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>

            {hasPermissions(features, { moduleId: 2, key: 'display' }) ? (
                <Button>login</Button>
            ) : null}
        </>
    )
}

export default Home
