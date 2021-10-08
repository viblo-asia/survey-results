<template>
    <div class="overview">
        <div class="overview__content">
            <p>
                Viblo là một dịch vụ miễn phí về chia sẻ và học tập kiến thức về
                Công Nghệ Thông Tin dành cho các lập trình viên ở Việt Nam.
                Trải qua gần 7 năm hình thành và phát triển, hiện Viblo đã trở thành
                một cộng đồng lớn mạnh với hơn 70,000 người dùng,
                hơn 32,000 bài viết được chia sẻ, gần 1000 bài viết mới
                cũng như 2 triệu pageviews hàng tháng.
            </p>

            <p>
                Chúng tôi đang tiến hành thực hiện một survey về những kỹ thuật đang được sử dụng
                trong các sản phẩm công nghệ nổi tiếng trong đất nước Việt Nam chúng ta.
                Hiện tại, chúng tôi đang nhận được những phản hồi đầu tiên và sẽ liên tục cập nhật
                trong thời gian tới. Dưới đây là báo cáo kết quả tổng hợp những kỹ thuật từ
                {{ totalLabel }} dự án công nghệ nổi tiếng đã đồng hành tham gia
                cùng chúng tôi trong cuộc khảo sát lần này.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            projectsTotal: {
                type: Number,
                default: 0,
            },
        },

        computed: {
            totalLabel() {
                if (!this.projectsTotal || this.projectsTotal <= 3) return 'các'

                const total = Math.ceil(this.projectsTotal)

                return `hơn ${total}`
            }
        }
    }
</script>
