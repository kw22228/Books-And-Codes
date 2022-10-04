// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(position => {
//         const latitude = position.coords.latitude;
//         const longitude = positio.coords.longitude;
//     });
// } else {
//     console.log('geolocation is empty!!');
// }

//실시간 감지
// const watchID = navigator.geolocation.watchPosition(position => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     console.log(latitude, longitude);
// });

// //감지 종료
// navigator.geolocation.clearWatch(watchID);

let tourlist = [
    {
        name: '오설록',
        addr: '제주도 서귀포시 안덕면 신화역사로 15',
        latitude: 33.3046315,
        longitude: 126.2888373,
    },
    {
        name: '섭지코지',
        addr: '제주도 서귀포시 성산읍 섭지코지로',
        latitude: 33.424214,
        longitude: 126.9337452,
    },
];

function getDistance(lat1, lon1, lat2, lon2, unit) {
    let radlat1 = (Math.PI * lat1) / 180;
    let radlat2 = (Math.PI * lat2) / 180;
    let radlon1 = (Math.PI * lon1) / 180;
    let radlon2 = (Math.PI * lon2) / 180;

    let theta = lon1 - lon2;
    let radtheta = (Math.PI * theta) / 180;

    let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;

    if (unit === 'K') dist = dist * 1.609344;
    if (unit === 'U') dist = dist * 0.8684;

    return dist;
}

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        for (let i = 0; i < tourlist.length; i++) {
            let distance = getDistance(
                latitude,
                longitude,
                tourlist[i].latitude,
                tourlist[i].longitude,
                'K'
            );

            tourlist[i].distance = distance;
        }

        let newTourlist = tourlist.sort((a, b) => a.distance - b.distance);

        console.log(newTourlist);
    });
}
