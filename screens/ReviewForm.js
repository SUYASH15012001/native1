import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/Button';

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'rating should be a number 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

const ReviewForm = (props) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                validationSchema={ReviewSchema}
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    // console.log(values);
                    actions.resetForm()
                    props.addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')} //updates the blur property in object when touch is removed
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            minHeight={80}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton
                            text='Submit'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>

        </View>
    )
}

export default ReviewForm

const styles = StyleSheet.create({})
