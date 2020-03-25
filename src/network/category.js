import { request } from "./request"

export function getCategoryBooks() {
    return request({
        url: '/cats/lv2',
    })
}