const FeatureCard = ({icon, title, description}) => {
    return (
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                {icon}
            </div>
            <h6 className="mb-2 font-semibold leading-5">{title}</h6>
            <p className="mb-0 text-sm text-gray-900">
                {description}
            </p>
        </div>
    )
}

export default FeatureCard