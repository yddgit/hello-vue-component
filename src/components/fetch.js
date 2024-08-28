import { ref, unref, isRef, watchEffect } from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    function doFetch() {
        // 在请求之前重置状态
        data.value = null
        error.value = null
        // unref()解包可能为ref的值
        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
    }

    if(isRef(url)) {
        watchEffect(doFetch)
    } else {
        doFetch()
    }

    return { data, error }
}