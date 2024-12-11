// handle serialize date
// convert Date objects to strings
//

function serializedDate(data) {
    const serialized = data.map((item) => ({
        ...item,
        register_date: item.register_date ? item.register_date.toISOString() : null,
        date: item.date ? item.date.toISOString() : null,
        end_of_season: item.end_of_season ? item.date.toISOString() : null,
    }));
    return serialized;
}
export default serializedDate;
