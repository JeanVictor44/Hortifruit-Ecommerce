const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('EUA', {
        currency:'USD',
        style: 'currency'
    }).format(value)
}

export default formatCurrency