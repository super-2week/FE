import React, { useState } from 'react';
import axios from 'axios';

type props = {
    productId: number;
    title: string;
}

const ReviewForm = ({ productId, title }: props) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [content, setContent] = useState('');

    const token = localStorage.getItem('accesstoken');

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleContentChange = (event: any) => {
        setContent(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            if (selectedFile !== null) {
                formData.append('multipartFile', selectedFile);
            }

            const reviewData = {
                productId: productId,
                title: title,
                content: content
            };
            formData.append('request', JSON.stringify(reviewData));

            const response = await axios.post('/v1/api/reviews', formData,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            console.log('Review submitted:', response.data);
            // 여기서 리뷰가 성공적으로 제출되었음을 사용자에게 알리는 로직을 추가할 수 있습니다.
        } catch (error) {
            console.log(error);
            // 에러 발생 시 사용자에게 알리는 로직을 추가할 수 있습니다.
        }
    };

    return (
        <div className="review_box_container">
            <div className="review_input_wrapper">
                <input type='file' onChange={handleFileChange} />
            </div>
            <div className="review_img_wrapper">
                <input type='text' value={content} onChange={handleContentChange} />
            </div>
            <div className="review_detail_container">
                <button onClick={handleSubmit}>작성하기</button>
            </div>
        </div>
    );
}

export default ReviewForm;
