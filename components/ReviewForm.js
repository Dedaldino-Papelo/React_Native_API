import { View, Button, TextInput } from 'react-native'
import { globalStyle } from '../global/style'
import {Formik} from 'formik'

export default function ReviewForm({ addItems }){
    return(
        <View style={globalStyle.container }>
            <Formik
                initialValues={{
                    name: '', 
                    email: ''
                }}
                onSubmit={(values) => {
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
                            />
                            <TextInput 
                            placeholder='Email' 
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            style={globalStyle.input}
                            />
                            <Button title='Submit' color='#09afeb' onPress={props.handleSubmit} />
                            
                    </View>
                )}

            </Formik>
        </View>
    )
}