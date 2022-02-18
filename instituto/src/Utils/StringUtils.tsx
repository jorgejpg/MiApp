const LongToDate = (milis: any) => {
    return new Date(Number.parseInt(milis)).toLocaleDateString();
}

const UtilsFunction = {
    LongToDate
}

export default UtilsFunction;
