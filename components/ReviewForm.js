import { View, Button, TextInput, Text } from 'react-native'
import { globalStyle } from '../global/style'
import {Formik} from 'formik'
import * as yup from 'yup';
import CustomButton from './CustomButton';

let schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email()
})

export default function ReviewForm({ addItems }){
    return(
        <View style={globalStyle.container }>
            <Formik
                initialValues={{
                    name: '', 
                    email: ''
                }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addItems(values)
                  }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            placeholder='Name' 
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            style={globalStyle.input}
                            onBlur={props.handleBlur('name')}
                            />
                            <Text style={globalStyle.errorText}>{props.touched.name && props.errors.name }</Text>

                            <TextInput 
                            placeholder='Email' 
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            style={globalStyle.input}
                            onBlur={props.handleBlur('name')}
                            />
                             <Text style={globalStyle.errorText}>{props.touched.email && props.errors.email }</Text>

                            <CustomButton 
                                text='submit'
                                onPress={props.handleSubmit}
                            />
                    </View>
                )}

            </Formik>
        </View>
    )
}