import { Formik } from "formik";
import { Button, View, TextInput, Text } from "react-native";
import { globalStyle } from "../../styles/global";
import * as yup from 'yup'
import FlatButton from "../../shared/FlatButton";


const validationSchema = yup.object({
    title:yup.string().required().min(4),
    body:yup.string().required().min(8),

    // rating:yup.number().min(1).max(5)
    rating:yup.string().required().test('is-num-1-5', 'rating has to be between 1-5',
        (val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0
        }
    )
})
export default function ReviewForm({addReview}) {
  return (
    <Formik
      initialValues={{ title: "", body: "", rating: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        addReview(values);
        actions.resetForm()
      }}
    >
      {(formikProps) => (
        <View style={{ padding: 20 }}>
          <TextInput
            style={[
              globalStyle.input,
              { backgroundColor: "white", borderWidth: 1, borderColor: "gray", padding: 10 },
            ]}
            placeholder="Enter title"
            placeholderTextColor="gray"
            onChangeText={formikProps.handleChange("title")}
            value={formikProps.values.title}
            onBlur={formikProps.handleBlur('title')}
          />
          <Text style={globalStyle.errormessage}>{formikProps.touched.title && formikProps.errors.title}</Text>


          <TextInput
            multiline
            style={[
              globalStyle.input,
              { backgroundColor: "white", borderWidth: 1, borderColor: "gray", padding: 10 },
            ]}
            placeholder="Enter body"
            placeholderTextColor="gray"
            onChangeText={formikProps.handleChange("body")}
            value={formikProps.values.body}
            onBlur={formikProps.handleBlur('body')}
          />
          <Text style={globalStyle.errormessage}>{formikProps.touched.body && formikProps.errors.body}</Text>


          <TextInput
            style={[
              globalStyle.input,
              { backgroundColor: "white", borderWidth: 1, borderColor: "gray", padding: 10 },
            ]}
            placeholder="Rating (1-5)"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={formikProps.handleChange("rating")}
            value={formikProps.values.rating}
            onBlur={formikProps.handleBlur('rating')}
          />
          <Text style={globalStyle.errormessage}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
          <View style={{ marginTop: 20 }}>
            <FlatButton title="Submit" onPress={formikProps.handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}
 