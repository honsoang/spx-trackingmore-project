const TrackingMore = require('trackingmore-sdk-nodejs')
const key = '' // key của TrackingMore
const trackingmore = new TrackingMore(key)

const thongtin = {
    'tracking_number': '', // Mã đơn hàng SPX
    'courier_code': 'spx-vn',
    'language': 'vi' // 'vi' or 'en'
}

trackingmore.trackings.createTracking(thongtin)
console.log("Đang lấy thông tin!")

    setTimeout(() => {trackingmore.trackings.getTrackingResults(thongtin)
        .then(result => {
            console.log("Mã id vừa tạo :", result.data[0].id)
            console.log("Parcel :", result.data[0].latest_event)

            setTimeout(() => {
                trackingmore.trackings.deleteTrackingByID(result.data[0].id)
                console.log("Đã xoá session, sẵn sàng để lấy thông tin tiếp theo")
            }, 3000); // mot it cooldown
        })
        .catch(e => console.log(e))
    }, 3000)

    // result.data[0].id
