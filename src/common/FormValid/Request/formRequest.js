export const rules = {
    'fullName': [
        'required',
        'min:1'
    ],
    'email': [
        'required',
    ],
}

export const messages  = {
    'fullName': {
        'required': 'Không được để trống',
        'min': 'giá trị thấp nhất là 1'
    },
    'email': {
        'required': 'Không được để trống',
    },
}