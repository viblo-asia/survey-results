<template>
    <div class="overview">
        <div class="overview__content">
            <p>
                Viblo là một dịch vụ miễn phí về chia sẻ và học tập kiến thức về
                Công Nghệ Thông Tin dành cho các lập trình viên ở Việt Nam.
                Trải qua gần 4 năm hình thành và phát triển, hiện Viblo đã trở thành
                một cộng đồng lớn mạnh với hơn 25,000 người dùng,
                hơn 20,000 bài viết được chia sẻ, hơn 700 bài viết mới
                cũng như hơn 1,5 triệu pageviews hàng tháng.
            </p>

            <p>
                Chúng tôi đã tiến hành thực hiện một survey về những kỹ thuật đang được sử dụng
                trong các sản phẩm công nghệ nổi tiếng trong đất nước Việt Nam chúng ta.
                Dưới đây là báo cáo kết quả tổng hợp những kỹ thuật từ
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
