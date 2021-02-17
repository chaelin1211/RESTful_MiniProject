package com.example.demo.ApiResponse;

import java.util.List;

import lombok.RequiredArgsConstructor;

// 여러 모델에 동시에 삽입될 에러 메시지를 위한 클래스

@Getter @Setter
@RequiredArgsConstructor
public abstract class commonResponse<T> {
    @NonNull private T data;
    private List<String> errores;
}
