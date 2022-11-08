export const getTimeString = (now) => {
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hour}:${minute}:${seconds}`
}

const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}

export const getDaysUntilXmas = (now) => {
    var today=new Date(now);
    var xmas=new Date(today.getFullYear(), 11, 24);
    if (today.getMonth()==11 && today.getDate()>24) 
    {
    xmas.setFullYear(xmas.getFullYear()+1); 
    }
    var one_day=1000*60*60*24;
    xmas = Math.ceil((xmas.getTime()-today.getTime())/(one_day))  
    return xmas;
}
