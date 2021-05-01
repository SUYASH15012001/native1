import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

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
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Button
                            color='maroon'
                            title='Submit'
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
