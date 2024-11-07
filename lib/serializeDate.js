// handle serialize date
// convert Date objects to strings
//

function serializedDate(data) {
    const serialized = data.map((item) => ({
        ...item,
        register_date: item.register_date ? item.register_date.toISOString() : null,
    }));
    return serialized;
}
export default serializedDate;
