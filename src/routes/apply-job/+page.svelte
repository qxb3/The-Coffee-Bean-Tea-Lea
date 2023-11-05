<script>
  import { FileButton, getToastStore } from '@skeletonlabs/skeleton'

  const toastStore = getToastStore()

  let fullName, email, phone,
      town, position, resume, privacyPolicy

  let fullNameErr, emailErr, phoneErr,
      townErr, positionErr, privacyPolicyErr

  function submit() {
    if (!fullName || !email || !phone || !town || !position || !privacyPolicy) {
      console.log(fullName, email, phone, town, position, privacyPolicy)
      toastStore.trigger({
        message: 'Please fill-up missing fields',
        background: "bg-error-500"
      })
    }

    if (!fullName) return fullNameErr = true
    if (!email) return emailErr = true
    if (!phone) return phoneErr = true
    if (!town) return townErr = true
    if (!position) return positionErr = true
    if (!privacyPolicy) return privacyPolicyErr = true

    fullName = '', email = '', phone = '',
      town = '', position = '', resume = '', privacyPolicy = ''

    fullNameErr = false, emailErr = false, phoneErr = false,
      townErr = false, positionErr = false, privacyPolicyErr = false

    toastStore.trigger({
      message: 'Your application has been sent',
      background: "bg-success-500"
    })
  }
</script>

<div class="container p-8">
  <h1 class="h1">Apply Now</h1>

  <form on:submit={submit} class="mt-12 space-y-4">
    <label class="label">
      <span class="h5">Full Name <span class="text-error-500">*</span></span>
      <input bind:value={fullName} class="input" class:input-error={fullNameErr} type="text" placeholder="Full Name" />
    </label>

    <label class="label">
      <span class="h5">Email <span class="text-error-500">*</span></span>
      <input bind:value={email} class="input" class:input-error={emailErr} type="text" placeholder="Email Adress" />
    </label>

    <label class="label">
      <span class="h5">Mobile Number <span class="text-error-500">*</span></span>
      <input bind:value={phone} class="input" class:input-error={phoneErr} type="text" placeholder="i.e +6312345678" />
    </label>

    <label class="label">
      <span class="h5">Town / City <span class="text-error-500">*</span></span>
      <input bind:value={town} class="input" class:input-error={townErr} type="text" placeholder="Quezon City" />
    </label>

    <label class="label">
      <span class="h5">Position <span class="text-error-500">*</span></span>
      <select bind:value={position} class="select" class:input-error={positionErr}>
        <option value="" disabled="" selected="">Select your position</option>
        <option value="Commissary - Warehouse Manager"> Commissary - Warehouse Manager</option>
        <option value="Commissary - R&amp;D Supervisor"> Commissary - R&amp;D Supervisor</option>
        <option value="Commissary - Warehouse Assistant"> Commissary - Warehouse Assistant</option>
        <option value="Commissary - Production Assistant"> Commissary - Production Assistant</option>
        <option value="Commissary - Baker"> Commissary - Baker</option>
        <option value="Commissary - Driver"> Commissary - Driver</option>
        <option value="Finance &amp; Strategic Planning Department - Finance Controller"> Finance &amp; Strategic Planning Department - Finance Controller</option>
        <option value="Finance &amp; Strategic Planning Department - Tax Officer"> Finance &amp; Strategic Planning Department - Tax Officer</option>
        <option value="Finance &amp; Strategic Planning Department - Inventory Officer"> Finance &amp; Strategic Planning Department - Inventory Officer</option>
        <option value="Finance &amp; Strategic Planning Department - Financial Reporting Supervisor"> Finance &amp; Strategic Planning Department - Financial Reporting Supervisor</option>
        <option value="Finance &amp; Strategic Planning Department - Accounts Payable Analyst"> Finance &amp; Strategic Planning Department - Accounts Payable Analyst</option>
        <option value="Marketing - Marketing Manager"> Marketing - Marketing Manager</option>
        <option value="Marketing - Marketing Officer"> Marketing - Marketing Officer</option>
        <option value="Marketing - Sales Manager"> Marketing - Sales Manager</option>
        <option value="Marketing - Sales Executive"> Marketing - Sales Executive</option>
        <option value="Marketing - Brand Specialist"> Marketing - Brand Specialist</option>
        <option value="People &amp; Organization - Organizational Wellness &amp; Development Officer"> People &amp; Organization - Organizational Wellness &amp; Development Officer</option>
        <option value="People &amp; Organization - Sourcing Specialist"> People &amp; Organization - Sourcing Specialist</option>
        <option value="People &amp; Organization - Recruitment Specialist"> People &amp; Organization - Recruitment Specialist</option>
        <option value="Operations - Store Manager"> Operations - Store Manager</option>
        <option value="Operations - Restaurant Manager"> Operations - Restaurant Manager</option>
        <option value="Operations - Kitchen Manager"> Operations - Kitchen Manager</option>
        <option value="Operations - Line Cook"> Operations - Line Cook</option>
        <option value="Operations - Dining Staff"> Operations - Dining Staff</option>
        <option value="Operations - Utility Custodian / Housekeeper"> Operations - Utility Custodian / Housekeeper</option>
        <option value="Operations - Junior Technician / Pest Control Technician"> Operations - Junior Technician / Pest Control Technician</option>
        <option value="Facilities Management - Facilities Engineer (Cavite)"> Facilities Management - Facilities Engineer (Cavite)</option>
      </select>
    </label>

    <label class="label" for="resume">
      <span class="h5">Resume <span class="text-error-500">*</span></span>
      <FileButton bind:files={resume} name="resume" width="w-full" button="btn btn-sm variant-filled-primary rounded-md">{resume ? resume[0].name : "Choose File"}</FileButton>
      <span class="text-xs text-zinc-500">Allowed file types: .pdf, .doc, .docx, .jpeg, .jpg, .png Max file size: 5mb</span>
    </label>

    <label class="label pt-4">
      <input bind:checked={privacyPolicy} class="checkbox" class:input-error={privacyPolicyErr} type="checkbox" />
      <span>
        By clicking submit, you agree to our Privacy Policy. The Coffee Bean and Tea Leaf® will use your personal data to help us respond and contact you regarding your job application. For more information on how we use your data.
        <span class="text-error-500">*</span>
      </span>
    </label>

    <button class="btn variant-filled-primary rounded-md mt-4" type="submit">Send Application</button>
  </form>
</div>
